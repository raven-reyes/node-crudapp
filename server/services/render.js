const axios = require("axios")
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.status(500).send({ error : "Error Occurred" })
        
        })
}
// sending add-user.js file to front-end
exports.add_user = (req, res) =>{
     res.render('add_user')  
}
// sending update_user.js file to fron-tend
exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.status(500).send({error : "an error occurred"});
        })
}