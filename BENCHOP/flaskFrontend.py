#!flask/bin/python
from flask import Flask, jsonify, request
import subprocess
import sys
from celery import group
from tasks import benchop

app = Flask(__name__)

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
