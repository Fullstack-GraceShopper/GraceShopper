const toUpper = str => str.charAt(0).toUpperCase() + str.slice(1)

const shuffle = a => {
  let newArr = a.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

const includesAny = (arr1, arr2) => {
  const longArr = arr1.length >= arr2.length ? arr1 : arr2
  const shortArr = arr1.length < arr2.length ? arr1 : arr2
  for (let elem of shortArr) {
    if (longArr.includes(elem)) return true
  }
  return false
}

const calcTotalForButton = objects => {
  let total = 0
  objects.forEach(object => {
    total += object.price * object.cartItem.quantity
  })
  return total
}

const formatDate = order => {
  let date = order.createdAt.slice(0,10).split('-')
  const year = date.shift()
  date.push(year)
  return date.join('-')
}

const categoryArr = [{name: 'dress'}, {name: 'casual'}, {name: 'popculture'},{name: 'funny'}, {name: 'athletic'}]


module.exports = {
  toUpper,
  shuffle,
  includesAny,
  calcTotalForButton,
  formatDate,
  categoryArr
}
