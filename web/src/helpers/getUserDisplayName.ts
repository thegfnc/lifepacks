const getUserDisplayName = (givenName, familyName) => {
  return [givenName, familyName].filter(Boolean).join(' ')
}

export default getUserDisplayName
