module.exports = {
  funcC: () => {
    return "hoho"
  },
  funcC1: () => {
    console.log('enter into funcC1')
    console.log('funcC1 this', this)
    let a = this.funcC()
    console.log(a)
    return a
  }
}