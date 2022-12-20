
import Express  from "express";
import { postTestimonial } from '../controllers/postTestimoniales.js'
import {
    inicio,
    about,testimoniales,
    viajes,
    informacionViaje
} from '../controllers/PagsController.js'


const router = new Express.Router()


router.get('/', inicio) // responde al inicio de la pag

router.get('/about', about) // === about

router.get('/testimoniales', testimoniales) // los testimoniales
router.post('/testimoniales', postTestimonial)

router.get('/viajes', viajes) // section de viajes
router.get('/viajes/:infor', informacionViaje);



export default router; // export a index