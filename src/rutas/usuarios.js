

const express = require('express;')
const router= express.Router();

const mysqlConnection = require ('../database');

router.get('/', (rep,res) =>{
    mysqlConnection.query('SELECT * FROM usuario', (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE id=?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }

    });
 });

 router.get('/:id', (rep,res)=>{
     mysqlConnection.query('SELECT * FROM vehiculos WHERE id=?',[id], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
     });
 });

 

 router 



module.exports = router;