const express =require('express');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const Image = require('./controllers/image');
const app = express();

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'facerecog'
    }
  });

console.log(db.select('*').from('users'));

app.use(express.json());
app.use(cors());





app.get('/', (req,res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) =>{ signin.handleSignIn(req, res, db, bcrypt)});

app.post('/register', (req, res) =>{ register.handleRegister(req, res, db, bcrypt)});
 
app.get('/profile/:id', (req,res) => { profile.handleProfile(req,res,db)})

app.put('/image', (req,res) => { Image.handleImage(req,res,db)})
app.post('/imageurl', (req,res) => { Image.handleApiCall(req,res)})
app.listen(3000);