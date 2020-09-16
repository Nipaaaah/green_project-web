/**
 * Return button color
 * @param {array} row 
 */
const getStatusColor = (row, param) => {
  if (row[param] === 1) {
    return "success"
  }
  else if (row[param] === 0) {
    return "danger"
  }
}

/**
 * Return status
 * @param {array} row 
 */
const getStatusButtonText = (row, param) => {
  if (row[param] === 1) {
    return "Enabled"
  }
  else if (row[param] === 0) {
    return "Disabled"
  }
}

export {
  getStatusButtonText,
  getStatusColor
}