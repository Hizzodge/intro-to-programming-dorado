//Create a new date object and store it in a variable named today

const today = new Date();
 console.log(today); 

//Retrieve the current year from your date object and store it in a variable named thisYear

const thisYear = today.getFullYear(); 

//Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer

const footer = document.querySelector('#footer');

//Create a new paragraph (p) element and store it in a variable named copyright

const copyright = document.createElement('p');
copyright.className = "footer-name";

//Set the inner HTML of your copyright element to display your name and the current year

copyright.textContent = `Ricardo Dias ${thisYear}`;

//Using "DOM Manipulation", append the copyright element to the footer

footer.appendChild(copyright);

//List your technical skills by creating an Array of String values and store it in a variable named skills

let skills = ["SQL", "GCP", "HTML", "CSS", "JavaScript", "Node.js", "React"];

//Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

const skillsSection = document.querySelector('#skills');

//Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList

 const skillsList = skillsSection.querySelector('.skills-list');

 //Create a for loop to iterate over your skills Array, starting at index 0

for(i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}


//Lesson 4.3

//Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm

 const messageForm = document.querySelector('[name = "leave_message"]');

//Add an event listener to the messageForm element that handles the "submit" event
//hint: addEventListener method


document.querySelector('#messages').style.visibility = "hidden";


messageForm.addEventListener('submit', event =>{
     event.preventDefault();
    const userName = event.target.name.value;
    const userEmail = event.target.email.value;
    const message = event.target.message.value;
    console.log(userName);
    console.log(userEmail);
    console.log(message);
    // messageSection.style.visibility = 'visible';


    //Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection
    const messageSection = document.querySelector('#messages');

    //Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList

    const messageList = messageSection.querySelector('ul');

    
   
    //Create a new list item (li) element and store it in a variable named newMessage

    const newMessage = document.createElement('li');
    newMessage.className = "input-message";
   
    
    //  On the next line, set the inner HTML of your newMessage element with the following information:
    // <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
    // <span> element that displays the "message"

   
    newMessage.innerHTML = `<a href=mailto: ${userEmail}>${userName}</a>  wrote: ${message}`;

    // Create a new <button> element and store it in a variable named removeButton
    const removeButton = document.createElement('button');
    removeButton.className = "btn-remove";
    // Set the inner text to "remove"
    buttonText = document.createTextNode("remove");
    removeButton.appendChild(buttonText);
    //Set the type attribute to "button"
    removeButton.setAttribute('type', 'button');

    // Add an event listener to the removeButton element that handles the "click" event
    removeButton.addEventListener('click', event =>{
    event.preventDefault();
    const entry = newMessage.parentNode;
    
    //Remove the entry element from the DOM
    newMessage.remove();

    if(messageList.getElementsByTagName('li').length == 0) {
        messageSection.style.visibility = 'hidden';
    };
    });

    // Append the removeButton to the newMessage element
    newMessage.appendChild(removeButton);

    //Append the newMessage to the messageList element
    messageList.appendChild(newMessage);

    messageForm.reset();

    // not working as disered
    if (newMessage != null)
    {
        messageSection.style.visibility = 'visible';
    }else {
        messageSection.style.visibility = 'hidden';
    };

});


//Lesson 6.2

//Using the Fetch API, create a "GET" request to the same GitHub API url as before

fetch('https://api.github.com/users/Hizzodge/repos', {mode: 'cors'})

//Chain a then method to your fetch call and pass it a function that returns the response JSON data
.then(function(response) {
    return response.json();
})
//Chain another then method and pass it a function, inside of which you can paste the code from your previous "load" event listener function
.then(function(response) {

    const projectSection = document.getElementById('projects');

    const projectList = projectSection.querySelector('ul');

    for (i =0; 0 < response.length; i++) {
        const project = document.createElement('li');
        project.textContent = response[i].name + "  " + response[i].language;
        project.innerHTML = `<a href= ${response[i].html_url} target="_blank">${response[i].name}  ${response[i].language}</a>`;
        projectList.appendChild(project);
    }

})

//Chain a catch() function to your fetch call to handle errors from the server
.catch(function(error) {
    console.log('There was an error', error);

})