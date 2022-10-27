document.querySelector("form").addEventListener("submit", e=>{
  e.preventDefault();

const formData = new FormData(e.target); 


formData.forEach((val, key) => { 


const tablerowElement = document.createElement("td");

tablerowElement.innerHTML = key

const tablecolumnElement = document.createElement("td");

tablecolumnElement.innerHTML = val

document.getElementById("tabledata").appendChild(tablerowElement);
document.getElementById("tabledata").appendChild(tablecolumnElement);


});});