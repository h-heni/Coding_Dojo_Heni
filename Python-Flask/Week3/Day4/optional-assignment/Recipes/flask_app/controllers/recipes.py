from flask import redirect, render_template, session, request,flash
from flask_app import app
from flask_app.models.login import User
from flask_app.models.recipe import Recipe


@app.route('/new', methods=['POST'])
def recipes():
    data={'id':session['user_id'], **request.form}
    Recipe.create_recipe(data)
    return redirect('/news')

@app.route('/news')
def re():
    return render_template ('new.html')