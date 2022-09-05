const Producto = require("../models/Producto");

exports.CrearProducto = async (req, res) => {
    try {

        let producto;
           //Creamos nuestro producto
           console.log(producto);

        producto = new Producto(req.body);
        console.log(producto);
        await producto.save();
        
        res.send(producto);
    
       } catch (error) {
       
        console.log(error);
        res.status(500).send("Hubo un error");
           
       }

       
  
 }


 exports.obtenerProductos = async (req, res) => {

    try {
        const producto = await Producto.find();
        console.log(producto);
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al realizar la consulta.");
    }
    
    
    }

    exports.consultarunsoloProducto = async (req , res) =>{

        console.log(req.params.id);
    
        try {
        
          
        //se realiza una consulta a la base de datos
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){
        
            res.status(404).json({msg: 'no existe el producto'})
        
        }

        console.log(producto);
      
        res.json(producto);
        
        } catch (error) {
            
            console.log(error);
            res.status(500).send("Hubo un error la actualizar el producto");
        }
        
        
        }


        exports.actualizarProductos = async (req , res) =>{
            console.log('estamos en actualizar productos');
             console.log(req.body);
             console.log(req.params.id)

            try {
            
                //se extraen los datos que vienen del cliente    
            const { nombre, categoria, ubicacion, precio } = req.body;
            //se realiza una consulta a la base de datos
            let producto = await Producto.findById(req.params.id);
             console.log('datos consulta');
             console.log(producto);


            if(!producto){
            
                res.status(404).json({msg: 'no existe el producto'})
            
            }
            //se actulizar los datos que traemos de la base de datos
            producto.nombre = nombre;
            producto.categoria = categoria;
            producto.ubicacion = ubicacion;
            producto.precio = precio;
            
            producto = await Producto.findByIdAndUpdate({_id: req.params.id}, producto, {new: true})
            res.json(producto);
            
            } catch (error) {
                
                console.log(error);
                res.status(500).send("Hubo un error la actualizar el producto");
            }
            
            }

            exports.eliminarProducto = async (req , res) =>{

                console.log('eliminar');
    
                try {
                
                  
                //se realiza una consulta a la base de datos
                let producto = await Producto.findById(req.params.id);
                
                if(!producto){
                
                    res.status(404).json({msg: 'no existe el producto'})
                
                }
               await Producto.findByIdAndRemove({ _id: req.params.id });
               console.log('El producto fue eliminado correctamene');
                res.json({msg: 'El producto fue eliminado correctamene.'});
                
                } catch (error) {
                    
                    console.log(error);
                    res.status(500).send("Hubo un error la actualizar el producto");
                }
                
                
                }
            


exports.CrearProducto2 = (req, res)=> {
    console.log('2');
    
    }

