import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
//import Issue from './models/Issue';
import Cliente from './models/Cliente';

//const app = express ();
//app.get('/', (req, res) => res.send('Hello World!'));
//app.listen(4000, () => console.log(`Express server running on port 4000`));

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/clientes');
const connection = mongoose.connection;


connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


router.route('/clientes').get((req, res) => {
    Cliente.find((err, clientes) => {
        if (err)
            console.log(err);
        else
            res.json(clientes);
    });
});


router.route('/clientes/:id').get((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if (err)
            console.log(err);
        else
            res.json(cliente);
    })
});

router.route('/clientes/add').post((req, res) => {
    let cliente = new Cliente (req.body);
    cliente.save()
        .then(cliente => {
            res.status(200).json({'cliente': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/clientes/update/:id').post((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if (!cliente)
            return next(new Error('Could not load document'));
        else {
             cliente.Nombre = req.body.Nombre;
             cliente.Apellido = req.body.Apellido;
             cliente.Sexo = req.body.Sexo;
             cliente.FechaRegistro = req.body.FechaRegistro;
             cliente.Correo = req.body.Correo;
             cliente.Telefono = req.body.Telefono;
             cliente.save().then(cliente => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/clientes/delete/:id').get((req, res) => {
    Cliente.findByIdAndRemove({_id: req.params.id}, (err, cliente) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));