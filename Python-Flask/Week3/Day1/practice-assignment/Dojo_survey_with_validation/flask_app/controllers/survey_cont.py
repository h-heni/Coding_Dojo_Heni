from flask import Flask ,redirect, render_template, session, request
from flask_app import app
from flask_app.models.survey import Survey


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result')
def result():
    return render_template("result.html")

@app.route('/form', methods=['POST'])
def form():
    session['name']=request.form.get('name')
    session['location']=request.form.get('location')
    session['language']=request.form.get('language')
    session['comment']=request.form.get('comment')
    if not Survey.validate_survey(request.form):
        return redirect('/')
    Survey.create(request.form)
    return redirect('/result')

