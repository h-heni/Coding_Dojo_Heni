from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user import User
@app.route('/users')
def users ():
    tab=User.get_all()
    return render_template("users.html",tab=tab)

@app.route('/users/new')
def new ():
    return render_template("new.html")

@app.route('/')
def index():
    return redirect ('/users')

@app.route('/users/form', methods=['POST'])
def form ():
    print(request.form)

    User.save(request.form)
    return redirect ('/users')

@app.route('/users/new/<int:id>')
def show(id):
    data={"id":id}
    obj=User.oneUser(data)
    return render_template ('show.html',obj=obj)

@app.route ('/users/edit/<int:id>')
def edit(id):
    data={"id":id}
    print(data)
    obj=User.oneUser(data)
    return render_template('edit.html',obj=obj)

@app.route ('/users/update', methods=['POST'])
def upd ():
    print("**************************",request.form)
    User.fix(request.form)
    return redirect ('/users')


@app.route('/delete/<int:id>')
def delet (id):
    data={"id":id}
    User.destroy(data)
    return redirect('/users')

