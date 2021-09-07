/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);
  
  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
  console.log("button clicked.");

  let counselor= formValue("counselor");
  let pronoun = formValue("pronoun");
  let televisionshow = formValue("televisionshow");
  let reflections = formValue("reflections");
  let weirdthought = formValue("weirdthought");
  let movie = formValue("movie");
  let fruit = formValue("fruit");
  let capital = formValue("capital");

   
  let madLib = `Dear ${counselor} , <br><br> I would like you to know the evidence of ${pronoun} captain pineapple. My head chef is barely ${televisionshow} and mother does not like the ${reflections} skalliwag. I ate ${weirdthought} it became a not so popular item in my stomach ${movie}. Hasta Manana! <br><br> Your ${fruit}, <br> ${capital}`;

  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}

// FormValue function returns the value existing in a HTML element and retrieves such an element by it's ID property
// Has error-handling in the form of conditions
// Checks for empty or invalid ID's and replaces input text with placeholder values