var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion.js');

/* GET Seccion productos (productos.ejs). */
router.get('/', function(req, res, next) {
    //consulta
    db.query('SELECT * FROM productos', (error,resultados) =>{
        if(error) throw error
        res.render('productos', { 
            title: 'Nuestros productos son..',
            libros: resultados
        });
    });
});

module.exports = router;