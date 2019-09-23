var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.username + 
        ':' + configValues.pwd + 
        '@cluster0-rqys2.mongodb.net/test?retryWrites=true&w=majority';
    }
}
