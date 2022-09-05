// rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos

router.post('/api/productos/crear', productoController.CrearProducto);
router.get('/api/productos/crear2', productoController.CrearProducto2);
router.get('/api/obtenerproductos', productoController.obtenerProductos);
router.get('/api/productos/:id', productoController.consultarunsoloProducto);
router.put('/api/actualizarproductos/:id', productoController.actualizarProductos);
router.delete('/api/eliminarproducto/:id', productoController.eliminarProducto);


module.exports = router;