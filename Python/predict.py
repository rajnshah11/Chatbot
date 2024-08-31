import numpy as np
import pandas as pd
from csv import reader
from flask import Flask, request, make_response
import json
import pickle
from flask_cors import cross_origin

app = Flask(__name__)
model = pickle.load(open('finalized_model.pkl', 'rb'))
training = pd.read_csv('Training.csv')
cols= training.columns
cols= cols[:-1]
x = training[cols]

symptoms_dict = {}

for index, symptom in enumerate(x):
       symptoms_dict[symptom] = index
input_vector = np.zeros(len(symptoms_dict),dtype=int)
@app.route('/')
def hello():
    return 'Hello World'

@app.route('/webbook', methods=['POST'])
@cross_origin()
def webbook():
    req = request.get_json(silent=True, force=True)
    res = processRequest(req)
    res = json.dumps(res, indent=4)
    r = make_response(res)
    r.headers['Content-Type'] = 'application/json'
    return r

def processRequest(req):

    result = req.get("queryResult")   
    if result.get("action")=='symptom1':
       parameters = result.get("parameters")
       sym=parameters.get("symptoms")
       for x in sym:
              input_vector[symptoms_dict[x]] = 1
    elif result.get("action")=='Symptom1.Symptom1-yes.Symptom1-yes-custom':
       parameters = result.get("parameters")
       sym=parameters.get("symptoms")
       for x in sym:
              input_vector[symptoms_dict[x]] = 1
       print("Yes")
    elif result.get("action")=='q2':
       parameters = result.get("parameters")
       yn=parameters.get("yesno")
       if yn==("yes" or "yeah"):
              input_vector[symptoms_dict['irregular_sugar_level']] = 1
       print("Yes")

    elif result.get("action")=='q3':
       parameters = result.get("parameters")
       yn=parameters.get("yesno")
       if yn==("yes" or "yeah"):
              input_vector[[symptoms_dict['restlessness'],symptoms_dict['chest_pain'],symptoms_dict['breathlessness'],symptoms_dict["fast_heart_rate"]]] = 1
       print("Yes")
    elif result.get("action")=='q4':
       parameters = result.get("parameters")
       yn=parameters.get("yesno")
       if yn==("yes" or "yeah"):
              input_vector[[symptoms_dict['joint_pain'],symptoms_dict['back_pain'],symptoms_dict['abdominal_pain'],symptoms_dict['knee_pain'],symptoms_dict["neck_pain"],symptoms_dict["hip_joint_pain"],symptoms_dict["muscle_pain"]]] = 1             
       print(input_vector)
       y=model.predict([input_vector])
       print(y)
       with open('symptom_Description.csv', 'r') as read_obj:
              csv_reader = reader(read_obj)
              for row in csv_reader:
                     if(row[0]==y):
                          d1=row[1]
                          d2=row[2]
       with open('symptom_precaution.csv', 'r') as read_obj:
              csv_reader = reader(read_obj)
              for row in csv_reader:
                     if(row[0]==y):
                          i1=row[1]
                          i2=row[2]
                          i3=row[3]
                          i4=row[4]
       fulfillmentText = 'Disease Identified is :-'+y[0]+ "\nDisease Description:-"+d1+ "\nPrecaution Measures:-\n1."+i1+"\n2."+i2+"\n3."+i3+"\n4."+i4+"\nYou may consult:-"+d2
       return{
        "fulfillmentText": fulfillmentText,
        "displayText": '25',
        "source": "webhookdata"
       }
if __name__ == '__main__':
    app.run(port=6000)








