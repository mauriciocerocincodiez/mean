
// const mongoose = require('mongoose');
// const url = 'mongodb://localhost/base1'


// require('dotenv').config({path: 'variables.env'});

// const conectarDB = async () => {

//     try {
       

//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//             })
//             console.log('DB Conectada');

//     } catch (error) {
     
//         console.log(error);
//         process.exit(1);//Detenemos la app

//     }

// }

// module.exports = conectarDB;

const mongoose = require('mongoose');
// require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {

 

    try {
       

        await mongoose.connect('mongodb://localhost:27017/base1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            console.log('DB Conectada');

    } catch (error) {
     
        console.log(error);
        process.exit(1);//Detenemos la app

    }

}

module.exports = conectarDB;