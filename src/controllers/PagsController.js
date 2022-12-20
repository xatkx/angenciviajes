

import { Viaje } from "../models/Viaje.js"; // model de sequelize para la section de viajes
import { testimonialModal } from '../models/testimoniales.js'
import path from 'node:path'
import { JSON } from "sequelize";


// inico pag

const inicio = async (request, response) => {

    const colletPromise = [Viaje.findAll({limit: 3}),testimonialModal.findAll({limit: 3})]

    try {
        const myDB = await Promise.all(colletPromise)
        response.render(`inicio`,
        { pagTitle: 'Inicio',
        inicioClass: 'home',
        dataViajes: myDB[0],
        msjTestimonial: myDB[1]
    });
    } catch (error) {
        console.log(error)
    }
}

// section de testimoniales
const testimoniales = async (request,response) => {

    try {
       const msjTestimonial = await testimonialModal.findAll()
       
       response.render('testimoniales',{pagTitle: 'Testimoniales', msjTestimonial})
    } catch (err) {
        console.log(err)
    }
    
}

// secction de viajes

const  viajes = async (reqesut, response) => {
    
    try {
        const  dataViajes = await  Viaje.findAll()

        //console.log(dataViajes)
        response.render('viajes',
        {
            pagTitle: 'Proximos viajes',
            dataViajes
        })
    } catch (error) {
        console.log('error en viajes :',error)
    }
}

const informacionViaje = async (req,res) => {
    const { infor } = req.params;
    

    try {
        const one = await Viaje.findOne({where: { slug: infor}})
        
        res.render('viajeMore',{one, titulo:'Mas Informacion'})
    } catch (err) { console.log(err)}

}

// section about us
const about = (request, response) => {
    response.render('about',{pagTitle: 'Nosotros'})
}





export {
    inicio,
    testimoniales,
     viajes,
    about,
    informacionViaje
}