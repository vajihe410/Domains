const showStatus = (status) => {
    switch(status) {
        case 1:
            return "pending";
        case 2:
            return "verified"
        case 3:  
            return "rejected"  
        default:
            return null    
    }
}
const formatDate = (dateString) =>{
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);
  return `${day}_${month}_${year}`;
}

export {showStatus, formatDate}