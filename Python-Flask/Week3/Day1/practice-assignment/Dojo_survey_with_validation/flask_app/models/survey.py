from flask_app.config.mysqlconnection import MySQLConnection
from flask import flash

class Survey:
    def __init__(self,data):
        self.id=data['id']
        self.name=data ['name']
        self.location=data['location']
        self.language=data['language']
        self.comment=data['comment']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def create(cls,data):
        query="INSERT INTO dojos (name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        return MySQLConnection("dojo_survey").query_db(query,data)

    @staticmethod
    def validate_survey(surv):
        is_valid = True # we assume this is true
        if len(surv['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(surv['comment']) < 3:
            flash("comment must be at least 3 characters.")
            is_valid = False
        return is_valid