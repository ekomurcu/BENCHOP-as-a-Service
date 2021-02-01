# BENCHOP-as-a-Service

This project aims to speed up the benchmark evaluation BENCHOP by running the computations in parallell in the SNIC cloud.

### Setting up environment

1. `source 'UPPMAX 2020_1-2-openrc.sh'` after changing the user_id in that file and type in the password from OpenStack SSC.

2. The main and other 6 workers are set up initially but you can run `python3 orchestration/orchestrate_baas.py` or run `python3 orchestration/orchestrate_flavored_baas.py` if you want to experiment with different flavors.

3. The floating IP of the main node is 130.238.29.12, run `python3 orchestration/contextualise_main.py` if you feel that it is terminated.  

### Running the backend VM

1. The celery workers are all set up, but run `flower --broker='amqp://acc5:0000@<your-private-ip>:5672/acc5host` if you want to see the workload of each worker.

2. run `python3 BENCHOP/flaskFrontend.py` from the main node if the you get the Connection Refused error when you run the below commands.

3. run `curl -i http://130.238.29.12:5000/flaskFrontend?no=1,2,3,5` if you want to evaluate all problems with default parameters. (4th and 6th ones can not be evaluated, will be handled in the future release.)

4. run `curl -i -v “http://130.238.29.12:5000/flaskFrontend?no=1,2,3,5&K=300&T=3&r=0.0001&sig=0.9` if you want to run them with custom parameters of K=300.0, T=3.0, r=0.0001 and sig= 0.9.

5. run `curl -i http://130.238.29.12:5000/newMethod?name=FD-NU` if you want to upload the new method of FD-NU. All of the available methods can be found at http://www.it.uu.se/research/scientific_computing/project/compfin/benchop/original .

### Running the frontend GUI

1. `npm install -g @angular/cli`(If you don't have Node Package Manager installed, download here: https://nodejs.org/en/)

2. Open terminal/command line in the BENCHOP-front directory

3. `npm install`

4. `ng serve`

5. Go to `https://localhost:4200/`

