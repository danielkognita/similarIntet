const mongoClient = require('mongodb').MongoClient

mongoClient.connect('mongodb://kognita-gsik:t8IY54lWjCaSjZoQDr5psKX52xllxfXg4n1KHIYQUe6dCckm18PjIegGG955IIpWPaMesMK2pl7fOd0eerCzyQ==@kognita-gsik.mongo.cosmos.azure.com:10255/?authSource=admin&replicaSet=mongodb&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
  { useUnifiedTopology: true },
  (error, connection) => {
    if (error) return console.log(error)
    global.conn = connection.db('intentSimilar')
    //console.log(global.conn)
   // global.conn.close();
   return conn
  })

  function intents(intents, callback) {
      conn.collection('intents').insertOne(intents, callback)
  }
  
  
  module.exports = { intents }
  
