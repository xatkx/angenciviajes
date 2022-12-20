
import { testimonialModal } from "../models/testimoniales.js";





export const postTestimonial = async (request, response) => {
    const {nombre, correo, mensaje } = request.body;
    let err = [];
    if(nombre.trim() === '') err.push({msj: 'nombre vacio'})
    if(correo.trim() === '') err.push({msj: 'correo vacio'})
    if(mensaje.trim() === '') err.push({msj: 'mensaje vacio'})

    if(err.length > 0) 
    {

        response.render('testimoniales.pug', 
            {pagTitle: 'Testimoniales',
            err,
            nombre,
            correo,
            mensaje
        })

        return
    }      

    try {
        const testi = await testimonialModal.create({
            nombre,
            correo,
            mensaje
        })
        const msjTestimonial = await testimonialModal.findAll()

        response.render('testimoniales',{pagTitle:' Testimoniales',msjTestimonial})

        console.log(testi.id)
    } catch (err) {
        console.log(err)
    }
}