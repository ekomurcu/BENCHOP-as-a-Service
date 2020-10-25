FROM ubuntu
RUN apt-get -y update
RUN apt-get -y upgrade 
RUN apt-get install -y git
RUN apt-get install -y python3 
RUN apt-get install -y python3-pip
RUN pip3 install --upgrade pip
RUN pip3 install oct2py
RUN pip3 install pygal
RUN pip3 install celery==4.4.7
RUN DEBIAN_FRONTEND=noninteractie apt-get install lightdm -y
RUN apt-get install -yq less sudo octave
WORKDIR /home/ubuntu
RUN git clone https://github.com/arslan5555/ACC5_project.git
WORKDIR /home/ubuntu/ACC5_project/proj/BENCHOP/
ENTRYPOINT celery -A tasks worker -c 1 -l INFO
