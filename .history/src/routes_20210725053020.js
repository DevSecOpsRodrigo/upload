const routes = require('express').Router();
const multer = require('multer');
const m

routes.post('/posts', multer().single('file'),(req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;