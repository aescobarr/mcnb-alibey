#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z $SQL_HOST $SQL_PORT; do
  sleep 0.1
done

echo "PostgreSQL started"

echo "Collecting static resources"
python3 manage.py collectstatic --noinput
python3 manage.py migrate
chown -R www-data:www-data /public_html/djangoref/static/
#echo "Creating django users"
#python3 createusers.py

exec "$@"
