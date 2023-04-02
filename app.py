from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Brfc1981'
app.config['MYSQL_DB'] = 'school'

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
