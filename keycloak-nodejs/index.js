
var express = require('express');
var axios = require('axios');
var app = express();
const session = require("express-session");
const mongoose = require('mongoose');
app.use(express.static('public'));
const User = require('./models/user.js');
const request = require('request-promise');

var memoryStore = new session.MemoryStore();
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/users', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(error => {
    console.log('Could not connect to the database.', error);
    process.exit();
});


app.use(express.urlencoded({extended:true}));
app.use(express.json());
const keycloak = require('./config/keycloak-config.js').initKeycloak();
// app.use(keycloak.middleware());
// //test
// var testController = require('./controller/test-controller.js');
// app.use('/test', testController);
// //user
// const apicontroller = require('./controller/user-controller.js');
// app.use(apicontroller);
// app.get('/', function(req, res){
//     res.send("Server is up!");
// });


async function getAccessToken(username, password) {
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', 'nodeJs-microservice');
    data.append('client_secret', '0c1418cc-dfb9-485b-a410-0e4f7246ceb8');
    data.append('username', username);
    data.append('password', password);
  
    const response = await axios.post('http://localhost:8180/auth/realms/Demo-Realm/protocol/openid-connect/token', data);
    return response.data.access_token;
  }
  
  
 

  app.get('/getUsers', async (req, res) => {
    try {
      const accessToken = await getAccessToken('admin', 'admin');
  
      const keycloakResponse = await axios.get('http://localhost:8180/auth/admin/realms/Demo-Realm/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const usersFromKeycloak = keycloakResponse.data;
  
      for (const user of usersFromKeycloak) {
        const existingUser = await User.findOne({ username: user.username });
  
        if (!existingUser) {
          await User.create({
            createdTimestamp: user.createdTimestamp,
            username: user.username,
            enabled: user.enabled,
            totp: user.totp,
            emailVerified: user.emailVerified,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          });
        } else {
         
          await User.updateOne({ username: user.username }, {
            createdTimestamp: user.createdTimestamp,
            enabled: user.enabled,
            totp: user.totp,
            emailVerified: user.emailVerified,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          });
        }
      }
  
      res.json({ message: 'Utilisateurs ajoutés ou mis à jour avec succès dans la base de données MongoDB.' });
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);

      if (error.response) {
        const status = error.response.status;
       
        const errorMessage = error.response.data;

        if (status === 401) {
          res.status(401).json({ error: "401" });
        } else if (status === 403) {
          res.status(403).json({ error: "403" });
        } else {
          res.status(500).json({ error: "500" });
        }
      } else if (error.request) {
        res.status(500).json({ error: 'Réponse vide du serveur Keycloak.' });
      } else {
        res.status(500).json({ error: 'Erreur lors de la requête vers Keycloak.' });
      }
    }
  });

  

  
  


// const WebSocket = require('ws');
// const server = new WebSocket.Server({ port: 3200 }); // Utilisez le port de votre choix

// server.on('connection', (socket) => {
//     console.log('Client connected to WebSocket');

//     socket.on('message', (message) => {
//         console.log('Received message:', message);
        
//         // Traitez les données d'utilisateurs reçues ici
//         var data = JSON.parse(message);
//         console.log('Données d\'utilisateurs reçues:', data);

//         // Vous pouvez les enregistrer dans votre base de données MongoDB si nécessaire
//     });

//     socket.on('close', () => {
//         console.log('Client disconnected from WebSocket');
//     });


    
// });

// app.get('/api/users', (req, res) => {
//     const userData = req.body;

//     // Traitez les données d'utilisateur ici, vous pouvez également les envoyer via WebSocket si nécessaire
//     console.log('Données d\'utilisateur reçues via API :', userData);

//     res.json({ message: 'Données d\'utilisateur reçues avec succès via l\'API' });
// });









app.get('/getDataKeyCloack',function(req, res,next){
 res.sendFile(__dirname+'/index.html')
})
app.listen(3000);
