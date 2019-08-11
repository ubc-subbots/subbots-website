const MongoClient = require('mongodb').MongoClient;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASS = process.env.MONGODB_PASS;
const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_DB   = process.env.MONGODB_DB;
const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}.mongodb.net/test?retryWrites=true&w=majority`;

var _db;

const connectDB = (callback) => {
    try {
        MongoClient.connect(url, { useNewUrlParser: true } , (err, client) => {
            if (err) return callback(err);            
            _db = client.db(MONGODB_DB);            
            return callback(null);
        })
    } catch (e){
        throw e;
    }
}
const getDB = () => {return _db;}

const disconnectDB = () => {_db.close();}

module.exports = {connectDB, getDB, disconnectDB};