const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:ferifoxOptions': {
      args: ['--headless'] // bastante util para rodar os testes em serv de integracao continua
    }
  }
})
