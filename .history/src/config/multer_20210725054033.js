const multer = require('multer');
const path = require('path');
const crypto = require('crypto');



module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({

    }),
    limits:{
        fileSize: 2 * 1024 + 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [

        ];
    },
};