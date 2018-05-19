# ShoppingCartAPI

Build a Restful CRUD API for a simple products carting application using Node.js, Express and MongoDB.


## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node server.js
```

You can browse the apis at <http://localhost:3000>

Steps to get the database ready and post the product data to display initialy.

1. Install mongo and set up the Environment variable for Mongo(Path="C:\Program Files\MongoDB\Server\3.6\bin")

2. Run on command prompt
   > mongod
  
   > mongo

3. Posting the Products data from API.

Please use the below api and payload to post the intial data to display.

API : Method : POST 
      Url : http://localhost:3000/products
      Payloads: 
             1> {"id":1,"name":"cloths","image":"cloths.png","price":1000}
             2> {"id":2,"name":"electronics","image":"electronics.jpg","price":5000}
             3> {"id":3,"name":"fruits","image":"fruits.jpg","price":500}
             4> {"id":4,"name":"shoes","image":"shoes.jpg","price":500}

Use the above api and post the above payloads one after the other individually.