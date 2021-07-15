// Selecting the inputs (search the dom for the inputs)
const submitButton = document.querySelector("#submit");

const nameInput = document.querySelector("#name");

const aboutInput = document.querySelector("#about");

const skillInput = document.querySelector("#skill");

const avatarInput = document.querySelector("#avatar");

const cardHolder = document.querySelector("#card-holder");

let cardButton = document.querySelectorAll(".button-wrapper");

let trainees = [];

//addEventListnener: used to know when the submit button has been clicked
//e.preventDefault: used to avoid the form from reloading itself(all inputs will remain after clicking the submit button)
submitButton.addEventListener('click', e => {
        const name = nameInput.value;
        const about = aboutInput.value;
        const skill = skillInput.value;
        const avatar = avatarInput.value;

        // Creating an object
        const trainee = {
            name: name,
            about: about,
            skill: skill,
            avatar: avatar
        }

        // creating an array
        trainees.push(trainee);
        createCard(name, about, skill, avatar);

        reset();

       // console.log(trainee);

        // Stop the resetting of the page
 e.preventDefault();
})

function createCard(name, about, skill, avatar){
    /* <div class="card">
                    <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJsYWNrJTIwaHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                    <div class="skill-set">
                        <span>HTML</span><span>CSS</span><span>Angular</span>
                    </div>
                    <h2>Titobiolorun Ogundipe</h2>
                    <p>The greatness of God</p>
                    <div class="button-wrapper">
                    <button>Read More</button>
                    </div>
                </div>
    */

    // <div class="card">
    const parentDiv = document.createElement('div');
    parentDiv.setAttribute("class", "card");

    // <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJsYWNrJTIwaHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
    const img = document.createElement("img");
    img.setAttribute("src", avatar)

    /*   <div class="skill-set">
            <span>HTML</span><span>CSS</span><span>Angular</span>
         </div>
    */
    const skillDiv = document.createElement('div');
    skillDiv.setAttribute("class", "skill-set");
    const skillArray = skill.split(",");
    for (let i = 0; i < skillArray.length; i++) {
        const span = document.createElement("span");
        span.textContent = skillArray[i];
        skillDiv.append(span);
    }

    // <h2>Titobiolorun Ogundipe</h2>
    const h2 = document.createElement("h2");
    h2.textContent = name;

    // <p>The greatness of God</p>
    const p = document.createElement("p");
    p.textContent = about;

    /* <div class="button-wrapper">
            <button>Read More</button>
         </div>
    */
   const readMoreDiv = document.createElement("div");
   readMoreDiv.setAttribute("class", "button-wrapper");
   const readMoreButton = document.createElement("button");
   readMoreButtonText.textContent = "Read More"
   readMoreButton.append(readMoreButtonText);
   readMoreDiv.append(readMoreButton);

   // Create alert for whenever Read More Button is clicked
   readMoreDiv.addEventListener("click", () => {
       alert(name);
   })
   
   parentDiv.append(img);
   parentDiv.append(skillDiv);
   parentDiv.append(h2);
   parentDiv.append(p);
   parentDiv.append(readMoreDiv);
   cardHolder.append(parentDiv);
}

function reset(){
      // Resetting the input value
      nameInput.value= "";
      aboutInput.value= "";
      skillInput.value= "";
      avatarInput.value= "";
}