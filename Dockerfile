FROM python:3.10


# Copy the backend code to the container
COPY . /app/backend

# Change the working directory back to /app/backend
WORKDIR /app/backend

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Start the Django development server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]

