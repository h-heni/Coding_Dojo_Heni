from flask import Flask,render_template,redirect,session

app=Flask(__name__)

app.secret_key="Benny bob wuz heer."

@app.route('/')
def hello_world():
    if "add" not in session:
        session["add"]=0
    else :
        session["add"]+=1

    return render_template('index.html') # Return the string 'Hello World!' as a response


@app.route('/destroy_session')
def hello():
    session.clear()
    return redirect('/')







if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)  