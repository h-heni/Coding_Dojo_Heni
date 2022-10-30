
from flask import Flask , render_template , redirect , request , session
import random
app=Flask(__name__)
app.secret_key="my secret key."


@app.route('/')
def welcome():
    if "num_guess" not in session :
        session["num_guess"]=random.randint(1,100)
    return render_template('index.html')


@app.route('/number',methods=['GET','POST'])
def guess ():
    session["number"]=int(request.form["number"])
        
    return redirect('/')


@app.route('/reset')
def reset ():
    session.clear()
    return render_template('index.html')






if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)  
