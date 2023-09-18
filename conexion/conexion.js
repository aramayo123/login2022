const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ventas'
})

conexion.connect( (error) =>{
    if(error) throw error
    console.log('Conexion exitosa');
})

//consultas
/*conexion.query('SELECT * FROM productos', (error,resultados) =>{
    if(error) throw error
    console.log(resultados);
})
*/
module.exports = conexion;

//conexion.end()