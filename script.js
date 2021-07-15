// let h1 = document.querySelector('h1');
let h1 = document.querySelector('.title');
// h1.textContent = "This is a Changed content";
/* setTimeout(()=>{
h1.textContent = "This is a Changed content";
}, 6000); */

// Creat new element
let img = document.createElement('img');
    img.src = "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";
document.body.appendChild(img);
let ul = document.createElement('ul');

    let l1 = document.createElement('li');
    l1.textContent = "Arsenal"; 

    ul.appendChild(l1);

    let l2 = document.createElement('li');
    l2.textContent = "Chelsea"; 

    ul.appendChild(l2);

    let l3 = document.createElement('li');
    l3.textContent = "Man U"; 

    ul.appendChild(l3);

    let l4 = document.createElement('li');
    // Set attribute
    l4.setAttribute('class', 'Liverpool')
    l4.textContent = "Liverpool";
    
    // Add event listener
    let counter = 0;
    l4.addEventListener('click', ()=>{
        l4.toggleAttribute('class');
        counter++;
        console.log("Liverpool was clicked" + " " + counter +  " " +"times");
    })

    ul.appendChild(l4);
document.body.appendChild(ul);