from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

from config import config

app.config['MYSQL_USER'] = config['user']
app.config['MYSQL_PASSWORD'] = config['password']
app.config['MYSQL_HOST'] = config['host']
app.config['MYSQL_DB'] = config['database']


# Initialize MySQL
mysql = MySQL(app)

from flask import Flask, render_template, jsonify

@app.route('/')
def get_classes():
    cur = mysql.connection.cursor()
    cur.execute('SELECT class_name FROM class')
    class_names = [row[0] for row in cur.fetchall()]
    cur.close()
    return jsonify(class_names=class_names)


if __name__ == '__main__':
    app.run(debug=True)
