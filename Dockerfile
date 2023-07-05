FROM python:3.10

# Set the working directory to /app/backend
WORKDIR /app/backend

# Copy the backend code to the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the contracts directory to /app/contracts inside the container
COPY ../contracts /app/contracts

# Change the working directory back to /app/backend
WORKDIR /app/backend

# Collect static files
RUN python manage.py collectstatic --noinput

# Apply database migrations
RUN python manage.py migrate

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
