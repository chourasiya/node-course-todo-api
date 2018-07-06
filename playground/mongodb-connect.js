const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  db.collection('Users').insertOne({
    name: 'Andew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if(err){
        return console.log('Unable to insert users' + err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
