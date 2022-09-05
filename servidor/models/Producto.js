const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({

nombre: {
    type: String
},
categoria: {
    type: String
},
ubicacion: {
    type: String
},
precio: {
    type: Number
},
fechaCreacion: {
    type: Date,
    default: Date.now()
}

});

module.exports = mongoose.model('Producto', ProductoSchema);