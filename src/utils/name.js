function validateName(name) {
  if (!name) return false

  if (!name.trim().length) return false

  return true
}

module.exports = validateName