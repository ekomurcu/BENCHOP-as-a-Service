from celery import Celery
from oct2py import octave
from oct2py import Oct2Py
import os

app = Celery('tasks', backend='rpc://', broker='pyamqp://guest@localhost//')

@app.task
def benchop(x, K, T, r, sig):
    oc = Oct2Py()

    if (K == None):
        K = 100
    if (x in [1,2,3]):
        if (T == None):
            T = 1.0
        if (r == None):
            r = 0.03
        if (sig == None):
            sig = 0.15
    if (x in [4,5,6]):
        if (T == None):
            T = 1.25
        if (r == None):
            r = 0.1
        if (sig == None):
            sig = 0.01

    time, relerr = oc.Table_run(x, K, T, r, sig, nout=2)
    time_flat = []
    for sublist in time:
        for item in sublist:
            time_flat.append(item)
    relerr_flat = []
    for sublist in relerr:
        for item in sublist:
            relerr_flat.append(item)


    return (time_flat, relerr_flat)
