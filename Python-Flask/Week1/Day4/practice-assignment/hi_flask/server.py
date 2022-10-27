from flask import Flask, render_template_string  # Import Flask to allow us to create our app




app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
# import statements, maybe some other routes
    
@app.route('/success')
def success():
    return "success"
    
# app.run(debug=True) should be the very last statement! 
@app.route('/dojo')
def name ():
    return 'Dojo!'


@app.route('/say/<string:name>')
def hi_there (name):
    return f'Hi! {name.title()}!'

@app.route('/repeat/<int:num>/<string:word>')
def rep (num,word):
    return num * word




@app.errorhandler(404)
def page_not_found(e):
    return render_template_string('Sorry! No response. Try again'),404








if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)   # Run the app in debug mode.
