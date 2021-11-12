let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

let listItems = "";

for (let i=0; i<myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems;
