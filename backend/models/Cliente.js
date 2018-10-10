import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Cliente = new Schema({  
     
    Nombre: {
        type: String
    },
    Apellido: {
        type: String 
    },
    Sexo: {
        type: String
    },
    FechaRegistro: {
        type: Date
    },
    Correo: {
        type: String
    },
    Telefono: {
        type: String
    }
});

export default mongoose.model('Cliente', Cliente);