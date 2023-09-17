//const { funcC1 } = require('./serviceC')
const serviceC = require('./serviceC')
module.exports = {
  funcB: function () {
    console.log("enter into func B")
    return { service: "thirdParty", port: 1010 }
  },
  funcB1: function () {
    console.log("enter into func B1")
    console.log('funcB1 this', this)
    let res = serviceC.funcC1()
    console.log(res)
  }
}