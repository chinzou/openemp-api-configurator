const express = require('express')
const fs = require('fs')
const router = express.Router()
const scripts = require('../utils/scripts')
const path = require('path')
const properties = require('../utils/properties')

router.get('/:set/:service', (req, res) => {
    let dirPath = path.join(properties.path, req.params.set, req.params.service).toString();
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return err;
        }
        files.forEach(filePath => {
            let file = path.join(dirPath, filePath)
            if (path.extname(file).toLowerCase() in properties.supportedFileType) {
                let propertyName = req.query.prop;
                let propertyValue = scripts.getProperties(file.toString(), propertyName);
                if (propertyValue) res.json({[propertyName]: propertyValue});
            }
        })
    });
});

module.exports = router;
