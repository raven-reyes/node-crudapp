var Userdb = require('../model/model');

// create and save new employee
 exports.create = (req,res)=>{
    // new employee
  const employee = new Userdb({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        gender: req.body.gender,
        department : req.body.department,
        title : req.body.title,
    }) 
    // save employee in the database
      employee
        .save(employee)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
            .catch(err =>{
            res.status(400).send({error : " error while saving"})
    
            })

}

// get employee info using id
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ error : `Cannot find employee  with id ${id}.`})
                }else{
                    res.send(data)  
                }
            })
            .catch(err =>{
                res.status(500).send(err)
            })
// get all employees info's
    }else{
        Userdb.find()
            .then(employee => {
                res.send(employee);
            })
            .catch(err => {
                res.status(500).send(err);
            })
    } 
}

// Update an employee using employee  id
exports.update = (req, res)=>{
     if(!req.body.firstname)  {
         return
        res.status(400).send({error : " firstname cannot be empty"}); 
     }  
     if(!req.body.lastname)  {
        return
       res.status(400).send({error : " lastname cannot be empty"}); 
    }  
    if(!req.body.email)  {
        return
       res.status(400).send({error : " email cannot be empty"}); 
    }  
    if(!req.body.department)  {
        return
       res.status(400).send({error : " department cannot be empty"}); 
    } 
    if(!req.body.title)  {
        return
       res.status(400).send({error : " title cannot be empty"}); 
    } 
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
         if(!data){
                res.status(404).send({ error: `Cannot Update employee with id ${id}. Maybe employee not found!`})   
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            console.log(err)
            res.status(500). send(err)
        });
}

// Delete an employee using employee  id
exports.delete = (req, res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ error: `employee with id ${id} not found`})
            }else{
                res.send({error : "employee  was deleted successfully!"})
            }
        })
        .catch(err =>{
            res.status(500).send(err); return;
        });
}