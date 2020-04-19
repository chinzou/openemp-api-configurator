const propsReader = require('properties-reader')

module.exports = {
    getProperties: (filePath, name) => {
        let fileProps = propsReader(filePath)
        if (!name) return fileProps
        return fileProps.get(name)
    }
};


