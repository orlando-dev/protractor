module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'], // qualquer arquivo com spec.js para realizar os testes
    onPrepare: () => { // roda os testes em aplicações não angular
      browser.waitForAngularEnabled(false)
    },
    jasmineNodeOpts: { random: true } // aqui diz que os testes são independentes, podem rodar de forma aleatoria
  }

  return Object.assign(
    {}, // << irá retornar objeto o objeto origem para objeto destino que seria os nome abaixo
    defaultConfig,
    provideConfig
  )
}
