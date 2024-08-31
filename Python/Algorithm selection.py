import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn import metrics
import csv
import warnings
from sklearn.metrics import accuracy_score
warnings.filterwarnings("ignore", category=DeprecationWarning)
training = pd.read_csv('Training.csv')
testing= pd.read_csv('Testing.csv')
cols= training.columns
cols= cols[:-1]
x = training[cols]
y = training['prognosis']
#le = preprocessing.LabelEncoder()
#le.fit(y)
#y = le.transform(y)
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=42)
testx=testing[cols]
testy=testing['prognosis']  
from sklearn.naive_bayes import GaussianNB
classifier = GaussianNB()
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
print( "Precision:", metrics.precision_score(y_test, y_pred,average='weighted') )
print( "Recall:", metrics.recall_score(y_test, y_pred,average='weighted') )
print('Accuracy: ', accuracy_score(y_test, y_pred) * 100)

# SVM Algorithm
from sklearn import svm
clf = svm.SVC( kernel = 'linear' )
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)
print( "Precision:", metrics.precision_score(y_test, y_pred,average='weighted') )
print( "Recall:", metrics.recall_score(y_test, y_pred,average='weighted') )
print('Accuracy: ', accuracy_score(y_test, y_pred) * 100)

# kNN Algorithm
from sklearn.neighbors import KNeighborsClassifier
classifier = KNeighborsClassifier()
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
print( "Precision:", metrics.precision_score(y_test, y_pred,average='weighted') )
print( "Recall:", metrics.recall_score(y_test, y_pred,average='weighted') )
print('Accuracy: ', accuracy_score(y_test, y_pred) * 100)

# Decision Tree Algorithm
from sklearn.tree import DecisionTreeClassifier
classifier = DecisionTreeClassifier()
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
print( "Precision:", metrics.precision_score(y_test, y_pred,average='weighted') )
print( "Recall:", metrics.recall_score(y_test, y_pred,average='weighted') )
print('Accuracy: ', accuracy_score(y_test, y_pred) * 100)
