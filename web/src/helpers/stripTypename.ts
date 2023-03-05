const stripTypename = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(stripTypename)
  }

  const copy = { ...obj }

  if (Object.prototype.hasOwnProperty.call(copy, '__typename')) {
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
