#Importing Libraries
import sys
import numpy as np
import pandas as pd
import pickle
import json

# Read the JSON string from stdin
data = sys.stdin.readline().strip()

# Deserialize the JSON string to a Python list
test_data = json.loads(data)

#Test Data
test_data_np = np.array(test_data)

# Reshape test_data_np into a 2D array with a single row
test_data_np_2d = test_data_np.reshape(1, -1)

#Reading Model
wine_rf_model = pickle.load(open('E:/5) College/ML Project/1) ML-Backend/ML-Back/src/python/Wine_Rf_Model', 'rb'))

#Getting Temp_prediction
y_pred = wine_rf_model.predict(test_data_np_2d)
y_pred_str_readable = np.array2string(y_pred)
answer = y_pred_str_readable[1]

#Setting Up Data to be Exported
output_dict = {
    'data': answer,
}
output_json_object = json.dumps(output_dict)
print(output_json_object)
