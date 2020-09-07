const express = require('express');
const router = express.Router();
const employeController = require('../controller/employeController');
const {check} = require('express-validator');

router.get('/',
    employeController.getAllEmployes
);

router.get('/:id',
    employeController.getEmployeById
);

router.post('/',
    [
        check('name','El nombre del empleado es obligatorio').not().isEmpty(),
    ],
    employeController.createEmploye
);

router.put('/:id',
    [
        check('name','El nombre del empleado es obligatorio').not().isEmpty(),
    ],
    employeController.updateEmploye
);

router.delete('/:id',
    employeController.deleteEmploye
);
module.exports = router;