const express = require('express')
const fs = require('fs')
const router = express.Router()
const scripts = require('../utils/scripts')
const path = require('path')
const properties = require('../utils/properties')


router.get('/:set/:service', (req, res, next) => {
  let dirPath = path.join(properties.path, req.params.set, req.params.service).toString()
  fs.readdir(dirPath, (err, files) => {
    if (err) return err
    files.forEach(filePath => {
      console.log(filePath)
      if (scripts.getProperties(path.join(dirPath, filePath).toString(), req.query.prop))
        res.send(scripts.getProperties(path.join(dirPath, filePath).toString(), req.query.prop))
    })
  });
});

module.exports = router;
