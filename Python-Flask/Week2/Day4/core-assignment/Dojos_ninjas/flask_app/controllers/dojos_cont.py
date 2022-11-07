from flask_app import app
from flask import render_template,request,redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


@app.route('/dojos')
def home () :
    list_dojos=Dojo.get_all()
    return render_template ('index.html',dojos=list_dojos)



@app.route('/dojo', methods=['POST'])
def index () :
    data={'name':request.form['name']}
    Dojo.create_dojo(data)
    return redirect('/dojos')


@app.route('/ninjas')
def new_ninja () :
    list_dojos=Dojo.get_all()
    return render_template ('index2.html',dojos = list_dojos)

@app.route('/ninja', methods=['POST'])
def create_ninja () :
    data=request.form
    Ninja.create_ninja(data)
    return redirect('/dojos')

@app.route('/dojos/<int:id>')
def show_dojo(id):
    data = {
        'id':id
    }
    ninjas = Ninja.get_ninjas_by_dojo_id(data)
    dojo = Dojo.get_one_by_id(data)
    return render_template('show_dojo.html', ninjas=ninjas ,dojo=dojo)
