# Useful links

- alternate open source authentication method: https://supertokens.com

# Install

- Install python 3.10.0 with pyenv : `pyenv install 3.10.0` and then `pyenv local 3.10.0`
- Create a venv: `python -m venv venv`
- Activate venv: `source venv/bin/activate`
- Upgrade pip: `pip install --upgrade pip`
- Install requirements: `pip install -r requirements.txt`
- Install dev requirements: `pip install -r requirements-dev.txt`
- Install pre-commit: `pre-commit install`

# Test the app

- Go to backend folder
- Run `pytest` to get test results
- Run `pytest --cov="." --cov-report html` to get full report then launch `index.html` with live server
