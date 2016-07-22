# Installation

```
# Base project installation

git clone https://github.com/aliev/django-skeleton.git projectname
cd projectname
virtualenv .env
source .env/bin/activate
pip install -r requirements.txt

# Install nodejs and bower through npm

sudo npm install -g bower

# Run migrations

python src/manage.py makemigrations core
python src/manage.py migrate

# Install bower components

python src/manage.py bower install

# Start with react

npm install
npm run build

```

# Heroku deployment

```
git init .
heroku create
git remote add heroku https://git.heroku.com/heroku-project-name.git
git add .
git commit -m 'first commit'
git push heroku master

# Migrations
heroku run python src/manage.py migrate

```

# Using docker

Build

```
docker build -t projectname .
```

Run project

```
docker run -it --rm -p 8000:8000 --name my-running-app projectname
```
