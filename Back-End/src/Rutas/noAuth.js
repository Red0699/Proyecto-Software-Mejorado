const express = require('express');
const router = express.Router();
var conexion = require('../conexion/index');

router.get('/', async (req, res) => {
    try {
        // Realizar la consulta para obtener todas las propiedades
        const query = 'SELECT * FROM propiedad';
        
        conexion.query(query, (error, results) => {
            if (error) {
                console.error('Error al obtener las propiedades:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                // Enviar las propiedades obtenidas como respuesta
                res.status(200).json(results);
            }
        });
    } catch (error) {
        console.error('Error en la ruta de obtener propiedades:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;