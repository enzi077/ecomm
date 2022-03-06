const filterProduct = (range) => {
  const temp = range.split('-')
  const final = []
  final[0] = parseInt(temp[0])
  final[1] = parseInt(temp[1])
  return final
}

export default filterProduct
