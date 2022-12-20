
import { Sequelize, DataTypes } from "sequelize";
import { db } from "../config/db.js";

// create modals

const modal = {
    titulo : {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio : {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_ida : {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_vuelta : {
        type: DataTypes.DATE,
        allowNull: true
    },
    imagen : {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion : {
        type: DataTypes.STRING,
        allowNull: true
    },
    disponibles : {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug : {
        type: DataTypes.STRING,
        allowNull: true
    },
}

export const Viaje = db.define('viajes', modal)