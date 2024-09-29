FROM python:3

ENV PYTHONUNDUFFERED=1

WORKDIR /app

COPY . /app/

CMD [ "python3","manage.py","runserver","0.0.0.0:8000" ]


EXPOSE 8000

RUN pip install -r requirements.txt
