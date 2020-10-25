#!flask/bin/python
from flask import Flask, jsonify, request
import subprocess
import sys
from celery import group
from tasks import benchop
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/helloworld")
def helloWorld():
    return "Hello, cross-origin-world!"

@app.route("/newMethod", methods= ['GET'])
def upload_method():
    if 'name' in request.args:
        method_name= str(request.args.get('name', None))
    else: 
        method_name=None
        return "no new method uploaded."

    msg_list=[]
    import os
    print("The existing methods are:" )
    msg_list.append("The existing methods are:")
    for fil in os.listdir():
        if os.path.isdir(fil) and fil != "__pycache__":
            print(fil)
            msg_list.append(fil)
    import requests

    #new_methods = ['MC','MC-S','QMC-S','MLMC','MLMC-A','FFT','FGL','FD-NU','FD-AD','RBF','RBF-PUM','RBF-LSML','RBF-AD','RBF-MLT']
    url= 'http://www.it.uu.se/research/scientific_computing/project/compfin/benchop/'
    #index = 7
    #method_name = new_methods[index]
    zip_name= method_name + '.zip'
    link= url + zip_name
    r= requests.get(link, allow_redirects=True)
    open(zip_name, 'wb').write(r.content)

    import zipfile
    with zipfile.ZipFile(zip_name, 'r') as zip_ref:
       zip_ref.extractall(method_name)

    os.remove(zip_name)

    print ("The existing methods after uploading new method are:" )
    msg_list.append("The existing methods after uploading new method are:" )
    for fil in os.listdir():
        if os.path.isdir(fil) and fil != "__pycache__":
            print(fil)
            msg_list.append(fil)
    msg_list.append("")
    
    msg_str='\n'.join(msg_list)
    return msg_str

@app.route('/flaskFrontend', methods=['GET'])
def count_pron():
  if 'K' in request.args:
    K = float(request.args.get('K', None))
  else:
    K = None
  if 'T' in request.args:
    T = float(request.args.get('T', None))
  else:
    T = None
  if 'r' in request.args:
    r = float(request.args.get('r', None))
  else:
    r = None
  if 'sig' in request.args:
    sig = float(request.args.get('sig', None))
  else:
    sig = None
  if 'no' in request.args:
    problems = request.args.get('no', None)
    problems = problems.split(',')

    i = 0
    for n in problems:
      problems[i] = int(n)
      i = i + 1
  else:
    problems = [1,2,3,4,5,6]

  data = group(benchop.s(problem_to_solve, K, T, r, sig) for problem_to_solve in problems)().get()

  data_flat = []
  for sublist in data:
    for item in sublist:
      for subitem in item:
        data_flat.append(subitem)

  json_data = jsonify(data_flat)
  return (jsonify(data_flat))

if __name__ == '__main__':

    app.run(host='0.0.0.0',debug=True)
