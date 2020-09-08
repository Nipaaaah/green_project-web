/**
 * Return button color
 * @param {array} row 
 */
const getStatusColor = (row) => {
  if (row.tipStatus || row.questStatus === 1) {
    return "success"
  }
  else if (row.tipStatus || row.questStatus === 0) {
    return "danger"
  }
}

/**
 * Return status
 * @param {array} row 
 */
const getStatusButtonText = (row) => {
  if (row.tipStatus || row.questStatus === 1) {
    return "Enabled"
  }
  else if (row.tipStatus || row.questStatus === 0) {
    return "Disabled"
  }
}

export {
  getStatusButtonText,
  getStatusColor
}