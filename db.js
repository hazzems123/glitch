import {MongoClient,ObjectId} from 'mangodb'

const db = MongoClient.connect("mongodb+srv://hazem_34:<iloverony123!>@cluster0-atcd6.mongodb.net/test?retryWrites=true&w=majority");
console.log ('this is the db :'+ db)

const Posts = db.collection('posts');
const Comments =  db.collection('comments')