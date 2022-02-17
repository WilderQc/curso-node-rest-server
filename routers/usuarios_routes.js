
const {Router}=require('express');
const { usuriosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios_controller');

const router = Router();

router.get('/',usuriosGet );

router.put('/:id',usuariosPut );

router.post('/', usuariosPost);

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch);





module.exports = router;