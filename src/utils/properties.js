const propertiesReader = require('properties-reader');
const path = require('path')
const env = process.env.NODE_ENV
const properties = propertiesReader(path.join('resources/', `dev.properties`))

module.exports = {
    path: process.env.CONFIG_PATH || properties.get('config.path'),
    port: properties.get('server.port') || '3001',
    debug: 'dev',
    user: (process.env.CONFIG_USER || properties.get('server.user') || null),
    password: (process.env.CONFIG_PASSWORD || properties.get('server.password') || null),
}