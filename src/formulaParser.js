function parseFormula(formula) {
  if (formula == null) return []

  if (typeof formula === 'number') {
    return [{ base: formula.toString() }]
  }

  let string = formula.toString().substring(0)

  const parsed = []

  let guard = 0

  // получаем массив объектов {base, sub, sup}
  while (string) {
    const baseRegEx = /(.*?)[_^]/g
    const supSubRegEx = /{(.*?)}/g

    // защита от ошибочного зацикливания
    if (guard > 50) break

    const obj = {}

    let key = ''

    let lastIndex = 0

    const baseSearchResult = baseRegEx.exec(string)

    if (baseSearchResult && baseSearchResult[1]) {
      // eslint-disable-next-line
      lastIndex = baseRegEx.lastIndex

      if (string[lastIndex - 1] === '_') {
        key = 'sub'
      } else if (string[lastIndex - 1] === '^') {
        key = 'sup'
      }
    } else {
      obj.base = string
      parsed.push(obj)
      break
    }

    obj.base = baseSearchResult[1]

    string = string.substring(lastIndex)

    if (string.startsWith('{')) {
      // все что заключено в {} будет помещено в obj[key]
      const result = supSubRegEx.exec(string)

      if (!result) {
        break
      }

      obj[key] = result[1]

      string = string.substring(supSubRegEx.lastIndex)
    } else {
      obj[key] = string[0]
      string = string.substring(1)
    }

    // additional sub of sup component
    if (string.startsWith('^') || string.startsWith('_')) {
      if (string.startsWith('^')) {
        key = 'sup'
      } else if (string.startsWith('_')) {
        key = 'sub'
      }

      string = string.substring(1)

      if (string.startsWith('{')) {
        // все что заключено в {} будет помещено в obj[key]
        const result = supSubRegEx.exec(string)

        if (!result) {
          break
        }

        obj[key] = result[1]
        string = string.substring(supSubRegEx.lastIndex)
      } else {
        obj[key] = string[0]
        string = string.substring(1)
      }
    }

    parsed.push(obj)

    guard += 1
  }

  return parsed
}

export default {
  type: 'service',
  name: 'parseFormula',
  private: true,
  create: () => parseFormula
}
