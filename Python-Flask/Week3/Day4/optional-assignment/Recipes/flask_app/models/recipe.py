from flask_app.config.mysqlconnection import connectToMySQL



class Recipe:
    db_name ="validation"
    def __init__(self,data):
        self.id=data['id']
        self.name=data ['name']
        self.description=data['description']
        self.instructions=data['instructions']
        self.time=data['time']
        self.date=data['date']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

#Update User

    @classmethod
    def fix(cls,data):
        query = "UPDATE recipes SET name=%(name)s,description=%(description)s,instructions=%(instructions)s,time=%(time)s,date=%(date)s WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

#delete User

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

# Create

    @classmethod
    def create_recipe(cls,data):
        query = "INSERT INTO recipes (name,description,instructions,time,date,user_id) VALUES (%(name)s,%(description)s,%(instructions)s,%(time)s,%(date)s,%(id)s);"
        return connectToMySQL(cls.db_name).query_db(query,data)


