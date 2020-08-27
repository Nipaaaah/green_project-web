/**
 * Return button color
 * @param {array} row 
 */
const getStatusColor = (row) => {
  if (row.tipStatus === 1) {
    return "success"
  }
  else if (row.tipStatus === 0) {
    return "danger"
  }
}

/**
 * Return status
 * @param {array} row 
 */
const getStatusButtonText = (row) => {
  if (row.tipStatus === 1) {
    return "Enabled"
  }
  else if (row.tipStatus === 0) {
    return "Disabled"
  }
}

export {
  getStatusButtonText,
  getStatusColor
}