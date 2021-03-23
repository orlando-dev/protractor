const configCreator = require('../utils/configCreator');

module.exports.config = configCreator({
    capabilities: { 
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless'] //bastante util para rodar os testes em serv de integracao continua
        }
    }
})