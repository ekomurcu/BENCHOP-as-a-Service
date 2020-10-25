# ACC5_project

This project aims to speed up the benchmark evaluation BENCHOP by running the computations in parallell in the SNIC cloud.

### Setting up environment

1. `source 'UPPMAX 2020_1-2-openrc.sh'` after changing the user_id in that file and type in the password from OpenStack SSC.

2. The main and other 6 workers are set up initially but you can run `python3 orchestration/orchestrate_baas.py` or run `python3 orchestration/orchestrate_flavored_baas.py` if you want to experiment with different flavors.

3.

### Running the backend VM

### Running the frontend GUI

1. `npm install -g @angular/cli`(If you don't have Node Package Manager installed, download here: https://nodejs.org/en/)

2. Open terminal/command line in the BENCHOP-front directory

3. `npm install`

4. `ng serve`

5. Go to `https://localhost:4200/`

