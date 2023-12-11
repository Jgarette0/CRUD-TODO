// Kuhaon and mga item / items sa local Storage
//   or mga gipang input sa local storage
const savedItems = localStorage.getItem("localStorageItem");
//savedItems === mga items or inputs

// Id sa list container ( <ul id="listContainer"></ul> )
const listContainer = document.getElementById("listContainer");
//listContainer === parent element sa mga todos/ or lista

// if naay mga lista or savedItems -localStorage.getItem("localStorageItem");-
//  kay ibutang sa sulod sa ( <ul id="listContainer"></ul> ) or listContainer
if (savedItems) {
  listContainer.innerHTML = savedItems;
  addDeleteFunctionality();
  // Add delete functionality for existing items
  //  like lista + delete na button
  //   every lista kay naay button delete functionality
}

// Function to update localStorage with current list items
function updateLocalStorage() {
  localStorage.setItem("localStorageItem", listContainer.innerHTML);
}

// Create a new list item when clicking on the "Add" button
//  mao niy pamaagi sa pag create ug list
function newElement() {
  const li = document.createElement("li");
  //maghimo ug list li === <li><li>
  const inputValue = document.getElementById("myInput").value;
  //kuhaon ang value sulod sa input bar <input type="text" id="myInput"/>
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  //Mag himo ug text base sa intput 'inputValue'
  // ug e append sa <li><li> na element
  //  result === <li> Mga Giapang Input sulod sa input box <li>

  //if inputValue === empty
  // meaning if walay input
  if (inputValue === "") {
    alert("You must write something!");
    //mo pop-up ug alert 'You must write something!'
  } else {
    //or else
    // Meaning naay input sulod sa <input type="text" id="myInput"/>
    //  example inputs: // Finish all gooogle classroom assignments today.
    document.getElementById("listContainer").appendChild(li);
    //if naay input then
    // kuhaon ang element <ul></ul>
    //  e append ang <li></li> sa sulod
    //RESULT ===
    // <ul>
    //   <li>
    //   Finish all gooogle classroom assignments today.
    //   </li>
    // </ul>

    updateLocalStorage();
    //E update ang local storage, purpose = para dili mawagtang ang list ig refresh
    addDeleteFunctionality();
    // Add delete functionality or delete button for the new item
  }
  document.getElementById("myInput").value = "";
  //mo reset ang input value into empty

  // Add a "close" button to the new list item
  //  this is close button or delete button
  //   first: create a <span> <span>
  //    second : create a text. \u00DZ is a code for icon
  //     third : add class to the span = 'close'
  //      fourt : e append ang icon sulod sa span element
  //       fifth : e sulod sa <li></li> element ang <span></span>
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  //RESULT ===
  // <ul>
  //   <li>
  //    Finish all gooogle classroom assignments today.
  //    <span class="close"> X </span>
  //   </li>
  // </ul>

  // Add functionality to the "close" button
  addDeleteFunctionality();
}

// Function to add delete functionality to list items
//  mahitabo sunod sa function kay
//   1 kuhaon ang class name sa span or delete button
//    2 for every delete button
//     3 if clicked then display === none
//      meaning mawala ang parent element or the list
//       if ma click ang delete button
//        4. update ang local storage nga gi delete na
function addDeleteFunctionality() {
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
      updateLocalStorage(); // Update localStorage after deletion
    };
  }
}

//  Add a "checked" symbol when clicking on a list item
//   every li element if clicked then naay display check
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//Clear all items in local storage
// localStorage.clear();

window.addEventListener("DOMContentLoaded", (event) => {
  // Get the input element
  const myInput = document.getElementById("myInput");

  // Set focus on the input element when the page loads
  myInput.focus();
});
