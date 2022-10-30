
from flask import Flask , render_template , redirect , session , request

app=Flask(__name__)

app.secret_key="hey i am here "

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
    return redirect('/result')





if __name__=='__main__':
    app.run(debug=True)  
