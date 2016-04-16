FROM python:2.7
VOLUME /project
COPY . /project
RUN mkdir /log
RUN pip install -r /project/requirements.txt
CMD ["python", "/project/src/manage.py", "runserver", "0.0.0.0:8000"]
