import React from 'react'


function getTime() {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let currentDate = new Date()
    let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear()+' '+ currentDate.getHours()+':'+currentDate.getMinutes()+':'+ currentDate.getSeconds();
   // console.log(formatedDate)
    
    /*let tempDate = new Date();
    let date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = "Current Date= "+date*/
    return (
      <p>{formatedDate}</p>
    );
  }
  
  export default getTime;