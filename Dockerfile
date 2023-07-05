FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy the backend code to the container
COPY . /app/backend

# Change the working directory back to /app/backend
WORKDIR /app/backend

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Start the Django development server
CMD ["/usr/local/bin/gunicorn", "--bind", "0.0.0.0:8000", "backend.backend.wsgi:application"]

