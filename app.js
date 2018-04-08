
// add event listener
document.querySelector('.btn').addEventListener('click', countWords);




function countWords() {

    const countBody = document.querySelector('.counter-body');
    countBody.innerHTML = '';
    // count words
    let words = document.getElementById('body').value;
    let wordLength = words.trim().split(/\s+/).length;


    // create element
    let counter = document.createElement('div');

    // create text node
    counter.appendChild(document.createTextNode(`There are ${wordLength} words`));



    countBody.appendChild(counter);

    // empty input
    document.getElementById('body').value = '';

    console.log(counter);


}

