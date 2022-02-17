const express = require('express')
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //middleware   no son mas que otras funcionalidades para nuestro servidor
        this.middlewares();

        //rutas de nuestra aplicacion
        this.routes();
    
    }
    middlewares(){
        //CORS
        this.app.use(cors());//esto para la seguridad solo es ejemplo

        //Lectura y parse del body 
        this.app.use(express.json()); //recibimos datos desde postman

        //Directorio publico
        this.app.use(express.static('public'));
    }
    //metodo para las rutas
    routes(){
        this.app.use( this.usuariosRoutePath, require('../routers/usuarios_routes'));

      
    }
   

    //con este metodo tenemos el puerto donde se esta ejecutando la app web
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }


}

module.exports = Server;