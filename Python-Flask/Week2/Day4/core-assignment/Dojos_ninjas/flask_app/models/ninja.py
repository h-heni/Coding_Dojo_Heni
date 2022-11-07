from flask_app .config.mysqlconnection import connectToMySQL


class Ninja:
    db_name="dojos_and_ninjas"
    def __init__(self,data):
        self.id=data['id']
        self.dojo_id=data['dojo_id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.age=data['age']
        self.created_at=data['created_at']
        self.uploaded_at=data['updated_at']


    @classmethod
    def create_ninja (cls,data):
        query="INSERT INTO ninjas (dojo_id,first_name,last_name,age) VALUES (%(dojo_id)s,%(first_name)s,%(last_name)s,%(age)s);"
        result =connectToMySQL(cls.db_name).query_db(query,data)
        print(result)
        return result
    
    @classmethod
    def get_ninjas_by_dojo_id(cls,data):
        query="SELECT * from ninjas WHERE dojo_id=%(id)s;"
        results =connectToMySQL(cls.db_name).query_db(query,data)
        print(results)
        list_ninjas=[] 
        for row in results :
            list_ninjas.append(cls(row))
        return list_ninjas