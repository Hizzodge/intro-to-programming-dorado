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

let skills = ["HTML", "CSS", "JavaScript", "SQL", "React"];

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
    // `${userName} wrote: ${message}`;
    // console.log('this needs to be fixed!! ',newMessage.hasAttribute('href'));
    // console.log('this needs to be fixed!! ',newMessage.getAttribute('href'));
        // newMessage.innerHTML = `<a  href = "mailto: ${userEmail}">${userName}</a> wrote: <span>${message}</span>`;
    // console.log(newMessage);

    // messageList.appendChild(newMessage);

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
    // entry.remove();
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

//Create a new XMLHttpRequest object and store it in a variable named githubRequest

let githubRequest = new XMLHttpRequest();

//Call the open method on your githubRequest object and pass the necessary arguments



githubRequest.open('GET', 'https://api.github.com/users/Hizzodge/repos');




// githubRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
//Finally, call the send method on your githubRequest object to actually send the request

githubRequest.send();
console.log(githubRequest);

githubRequest.addEventListener("load", function() {
    const repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);


    // Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
    const projectSection = document.getElementById('projects');

    // Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList

    const projectList = projectSection.querySelector('ul');
 
    //Create a for loop to iterate over your repositories Array, starting at index 0
    //Inside the loop, create a new list item (li) element and store it in a variable named project
    //set the inner text of your project variable to the current Array element's name property
    //append the project element to the projectList element
    for (i =0; 0 < repositories.length; i++) {
        const project = document.createElement('li');
        project.textContent = repositories[i].name + "  " + repositories[i].language;
        project.innerHTML = `<a href= ${repositories[i].html_url} target="_blank">${repositories[i].name}  ${repositories[i].language}</a>`;
        projectList.appendChild(project);
    }
});

