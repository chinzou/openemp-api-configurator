## OpenEMP Configurator
OpenEMP Configurator is a service that provides a list of structered properties and configuration files
via REST API for microservices.

### Get Started
first install [nodejs](https://nodejs.org/)

to run Configurator execute the following:
```shell script
git clone https://github.com/openemp/openemp-api-configurator
cd openemp-api-configurator
npm install 
npm start
```
configurator then will serve properties and configurations from the [/config](test/config) folder, please override it's content to provide your own.

### Setup

to run in production execute the following:
```shell script
export CONFIG_PATH=<path/to/your/config>
npm start
```
Setting `CONFIG_PATH` is required for production.

**Supported env variables:**
- `PORT` Server port (default: 3001)  
- `USER` Set a username to enable authentication
- `PASSWORD` Set a password for user
- `CONFIG_PATH` A path to custom config folder

### Contribution
To contribution please follow the '[How To Contribute](https://docs.openemp.org/en/latest/contribute/)' page in the documentation.

