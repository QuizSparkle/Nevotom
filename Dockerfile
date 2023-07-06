
FROM public.ecr.aws/zeet/lambdahandler:latest as base

RUN yum install -y amazon-linux-extras && amazon-linux-extras install -y python3.10
RUN ln -s /usr/bin/python3.10 /usr/bin/python3 || true

RUN ln -s /usr/bin/pip3.10 /usr/bin/pip3 || true

 
WORKDIR /app

COPY . .

RUN sed -i 's/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = \["*"\]/g' ./*/settings.py



ARG UVICORN_HOST
ARG ZEET_APP
ARG ZEET_PROJECT
ARG GIT_COMMIT_SHA
ARG ZEET_ENVIRONMENT
ARG GUNICORN_CMD_ARGS
ARG PYTHONUNBUFFERED

RUN pip3 install -r requirements.txt
