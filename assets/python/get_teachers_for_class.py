from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/get_teachers_for_class')
def get_teachers_for_class():
    class_num = int(request.args.get('class'))
   
    teachers = []
    # list of teachers 
    return jsonify(teachers)

if __name__ == '__main__':
    app.run()
