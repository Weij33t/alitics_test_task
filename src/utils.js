export const formatString = (string) => {
  return string
    .replaceAll(' ', '')
    .replaceAll('%', '')
    .replaceAll(',', '')
    .replaceAll('Настроить', '')
}

export const formatNumber = (value, sliceTo) => {
  if (value === '-' || value === 0) {
    return value
  }
  let result = new Intl.NumberFormat('ru-RU').format(value)
  if (sliceTo) {
    result = result.slice(0, sliceTo) + '...'
  }
  return result
}

export const headerToKey = {
  НазваниеSource: 'source.name',
  ПоказыTraffic: 'traffic.shows',
  КликиTraffic: 'traffic.clicks',
  СеансыTraffic: 'traffic.seances',
  CTRTraffic: 'traffic.ctr',
  ЦенакликаTraffic: 'traffic.clickPrice',
  ЗатратыTraffic: 'traffic.cost',
  'Кол-воSales': 'sales.count',
  СРАSales: 'sales.cpa',
  ВыручкаSales: 'sales.gain',
  'Кол-воGoal': 'goal.count',
  СРАGoal: 'goal.cpa',
  CRGoal: 'goal.cr',
}

export const getSortedRows = (path, rows, asc) => {
  return rows.sort((firstRow, secondRow) => {
    const firstValue = deepFind([...path], firstRow)
    const secondValue = deepFind([...path], secondRow)
    if (typeof firstValue === 'string') {
      return firstValue.localeCompare(secondValue) * asc
    }
    return (firstValue - secondValue) * asc
  })
}

function deepFind(paths, obj) {
  let current = obj,
    i

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined
    } else {
      current = current[paths[i]]
    }
  }
  return current === '-' ? 0 : current
}
