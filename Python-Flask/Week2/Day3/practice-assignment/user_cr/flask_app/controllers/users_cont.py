from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user import User
@app.route('/users')
def users ():
    tab=User.get_all()
    print(len(tab))
    return render_template("users.html",tab=tab)

@app.route('/users/new')
def new ():
    return render_template("new.html")

@app.route('/users/form', methods=['POST'])
def form ():
    data= {
    'first_name':request.form.get('fname'),
    'last_name':request.form.get('lname'),
    'email':request.form.get('email')
    }

    User.save(data)
    return redirect ('/users')