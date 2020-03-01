import React from 'react'


function getTime() {
  const months = ["JANUARY", "FEBUARY", "MARCH","APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    let currentDate = new Date()
    let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear()+' '+ currentDate.getHours()+':'+currentDate.getMinutes()+':'+ currentDate.getSeconds();
    return (
      <p>{formatedDate}</p>
    );
  }
  
  export default getTime;