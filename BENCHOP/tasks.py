from celery import Celery
from oct2py import octave
from oct2py import Oct2Py
import os

app = Celery('tasks', backend='rpc://', broker='pyamqp://guest@localhost//')

@app.task
def benchop(x, sig):
    oc = Oct2Py()

    time, relerr = oc.Table_run(x, sig, nout=2)
    time_flat = []
    for sublist in time:
        for item in sublist:
            time_flat.append(item)
    relerr_flat = []
    for sublist in relerr:
        for item in sublist:
            relerr_flat.append(item)


    return (time_flat, relerr_flat)
