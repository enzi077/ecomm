const upiValidator = (str) => {
  return (str.indexOf('@') > 0 && str.indexOf('@') < (str.length - 1))
}

export default upiValidator
