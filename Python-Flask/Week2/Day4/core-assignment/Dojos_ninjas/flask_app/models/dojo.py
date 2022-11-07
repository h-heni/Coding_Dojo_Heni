from flask_app .config.mysqlconnection import connectToMySQL


class Dojo:
    db_name="dojos_and_ninjas"
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.created_at=data['created_at']
        self.uploaded_at=data['updated_at']

    @classmethod
    def create_dojo (cls,data):
        query="INSERT INTO dojos (name) VALUES (%(name)s);"
        result =connectToMySQL(cls.db_name).query_db(query,data)
        print(result)
        return result
    @classmethod
    def get_all(cls):

        query = "SELECT * FROM dojos;"
        results = connectToMySQL(cls.db_name).query_db(query)
        list_dojos_from_db=[]
        for row in results :
            list_dojos_from_db.append(cls(row))
        return list_dojos_from_db

    @classmethod
    def get_one_by_id(cls,data):
        query = "SELECT * FROM dojos where id = %(id)s;"
        result = connectToMySQL(cls.db_name).query_db(query,data)
        print("*"*60,result)
        dojo = cls(result[0])
        print("-"*60, dojo)
        return dojo