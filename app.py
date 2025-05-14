from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

items = [
    { "id": 1, "name": "Earphones" },
    { "id": 2, "name": "Stew and Rice" },
    { "id": 3, "name": "Manicure" },
    { "id": 4, "name": "Pedicure" },
    { "id": 5, "name": "African Sculpture" },
    { "id": 6, "name": "Customised Keyholders" },
    { "id": 7, "name": "Candy Bars" },
    { "id": 8, "name": "Mambo" },
    { "id": 9, "name": "Tables" },
    { "id": 10, "name": "Item 10" }
]

@app.route('/api/products')
def get_items():
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)
