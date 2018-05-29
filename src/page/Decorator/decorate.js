export default function decorator() {
  return function ( target, name, descriptor) {
    let fn = descriptor.value
    console.log(fn)
    return {
      configurable: true,
      enumerable: true,
      get(){
        console.log('this,',this)
        return fn
      }
    }
  }
}