import { db } from '../config/db.js'
import { DataTypes } from 'sequelize'


export const testimonialModal = db.define('testimoniales', {
    nombre: {
        type: DataTypes.STRING
        
    },
    correo: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    },
})