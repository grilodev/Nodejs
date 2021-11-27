//para o javascript ser criterioso
'use strict'

const express = require('express');
const router = express.Router();

//req: request, res: response, next: next
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API Gio",
        version: "0.0.2"
    });
});

module.exports = router;