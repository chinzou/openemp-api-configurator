const fs = require("fs");
const path = require("path");
const propsReader = require('properties-reader')

module.exports = {
    // walk through a config folder
    getProperties: (filePath, name) => {
        let fileProps = propsReader(filePath)
        if (!name) return fileProps
        return fileProps.get(name)
    }
};


