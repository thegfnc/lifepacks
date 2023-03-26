const getUserDisplayName = (givenName, familyName, username) => {
  return [givenName, familyName].filter(Boolean).join(' ') || '@' + username
}

export default getUserDisplayName
