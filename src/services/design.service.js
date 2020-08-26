const getStatusColor = (row) => {
    if (row.tipStatus === 1) {
      return "success"
    }
    else if (row.tipStatus === 0) {
      return "danger"
    }
  }

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