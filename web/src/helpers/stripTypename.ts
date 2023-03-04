const stripTypename = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(stripTypename)
  }

  const copy = { ...obj }

  if (copy.hasOwnProperty('__typename')) {
    delete copy.__typename
  }

  for (const [key, value] of Object.entries(copy)) {
    if (value && typeof value === 'object') {
      copy[key] = stripTypename(value)
    }
  }

  return copy
}

export default stripTypename
