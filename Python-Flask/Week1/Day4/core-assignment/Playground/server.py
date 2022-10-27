from flask import Flask , render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/play')         # The "@" decorator associates this route with the function immediately following
def hello_world():

    return render_template ('index.html',col='rgb(159, 196, 248, 1)',num=3)  # Return the string 'Hello World!' as a response

@app.route('/play/<int:num>')
def num(num):
    col='rgb(159, 196, 248, 1)'
    return render_template ('index.html',col=col,num=num) 

@app.route('/play/<int:num>/<string:col>')
def col(num,col):
    return render_template ('index.html',col=col,num=num) 
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

