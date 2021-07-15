const ul = document.querySelector('ul');

// <li></li>
const li5 = document.createElement('li');
// item 5
const text = document.createTextNode('Item 5');

// <li>Item 5</li>
li5.append(text);

ul.append(li5);

li5.addEventListener('click', e => {
  e.target.remove();
});

let a = document.createElement('a');

a.setAttribute('href', 'https://arsenal.com');
a.textContent = 'Arsenal';

document.querySelector('body').append(a);

//console.log(ul);

//console.log(ul.childNodes);

// const li = document.querySelector('li');

// console.log(li.parentNode);

// console.log(li.nextSibling);

/**
 *
 * 1. You shoiud search elements in the DOM using querySelector
 *
 * 2. createElements using the createElement method
 */
