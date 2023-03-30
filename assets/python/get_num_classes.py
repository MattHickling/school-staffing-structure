from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get_num_classes')
def get_num_classes():
    
    num_classes = [] 

    return jsonify(num_classes)

if __name__ == '__main__':
    app.run()
