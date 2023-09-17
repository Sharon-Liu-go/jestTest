const { funcB1 } = require('./serviceB');
//const serviceB = require('./serviceB');

module.exports = {
  funcA: function (param, cb) {
    let res = funcB()
    // let { service, port } = funcB()
    //console.log("service", service, "port", port)
    //return { service, port }
    console.log('res', res)
    return cb(res)
  },
  funcA1: function () {
    console.log('this', this)
    return this.funcA(123, (result) => {
      console.log(result)
      return result
    })
  },
  funcA2: function () {
    console.log('funcA2 this', this)
    let res = funcB1()
    console.log(res)
    return res
  }
}