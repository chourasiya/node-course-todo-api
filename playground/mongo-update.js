const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3f4cc5f0a24f5ccd43b0c9')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
