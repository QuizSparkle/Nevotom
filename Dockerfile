FROM python:3.10

# Set the working directory to the backend folder
WORKDIR /backend

# Copy the backend code to the container
COPY ./backend

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Collect static files
# RUN python manage.py collectstatic --noinput

# Apply database migrations
# RUN python manage.py migrate

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
