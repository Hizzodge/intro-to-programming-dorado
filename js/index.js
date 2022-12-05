//Create a new date object and store it in a variable named today

const today = new Date();
 console.log(today); // ###?????

//Retrieve the current year from your date object and store it in a variable named thisYear

const thisYear = today.getFullYear(); // ###?????

//Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer

const footer = document.querySelector('#footer');

//Create a new paragraph (p) element and store it in a variable named copyright

const copyright = document.createElement('p');

//Set the inner HTML of your copyright element to display your name and the current year

copyright.textContent = `Ricardo Dias ${thisYear}`;

//Using "DOM Manipulation", append the copyright element to the footer

footer.appendChild(copyright);

//List your technical skills by creating an Array of String values and store it in a variable named skills

let skills = ["HTML", "CSS", "JavaScript", "SQL", "React"];

//Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

const skillsSection = document.querySelector('#skills');

//Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList

 const skillsList = skillsSection.querySelector('ul');

 //Create a for loop to iterate over your skills Array, starting at index 0

for(i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}


