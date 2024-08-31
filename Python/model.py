import pandas as pd
from sklearn import preprocessing
from sklearn.tree import DecisionTreeClassifier
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
import csv
import warnings
import pickle

warnings.filterwarnings("ignore", category=DeprecationWarning)
training = pd.read_csv('Training.csv')
testing= pd.read_csv('Testing.csv')
cols= training.columns
cols= cols[:-1]
x = training[cols]
y = training['prognosis']
y1= y

reduced_data = training.groupby(training['prognosis']).max()
#print(reduced_data)
#mapping strings to numbers
#le = preprocessing.LabelEncoder()
#le.fit(y)
#y = le.transform(y)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)
testx=testing[cols]
testy=testing['prognosis']  
#testy=le.transform(testy)

clf1  = DecisionTreeClassifier()
clf = clf1.fit(x_train,y_train)
print(clf.score(x_train,y_train))
print ("cross result========")
scores = cross_val_score(clf, x_test, y_test, cv=3)
print (scores)
print (scores.mean())
print("Accuracy on acutal test: ",clf.score(testx, testy))
predicted = clf.predict(testx)
print(predicted)
filename = 'finalized_model.pkl'
pickle.dump(clf, open(filename, 'wb'))


