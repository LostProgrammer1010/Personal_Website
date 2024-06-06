from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('home.html')


@app.route("/project")
def projects():
    return render_template('projects.html')


@app.route("/resume")
def resume():
    return render_template('resume.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
