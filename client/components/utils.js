export const toUpper = str => str.charAt(0).toUpperCase() + str.slice(1)

export const shuffle = a => {
  let newArr = a.slice()

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

export const includesAny = (arr1, arr2) => {
  const longArr = arr1.length >= arr2.length ? arr1 : arr2
  const shortArr = arr1.length < arr2.length ? arr1 : arr2
  for (let elem of shortArr) {
    if (longArr.includes(elem)) return true
  }
  return false
}