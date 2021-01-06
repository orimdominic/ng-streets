const pipe = (...fns:Array<Function>) => (initVal:any) => {
  return fns.reduce((accum, currentFn) => currentFn(accum), initVal)
}

export default pipe