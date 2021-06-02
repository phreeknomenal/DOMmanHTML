document.addEventListener('DOMContentLoaded', () => {
    // create, give class and append container div.
    let container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // create, set type, set class and append button to container
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Submit';
    button.className = 'button';
    container.appendChild(button);

    // button onclick alert. 
    button.addEventListener('click', () => {
        alert('An apple a day keeps the doctor away!');
    });

    // find text in p element.
    let btn2Text = document.getElementById('textBox');

    // alert text in p on button2 click. 
    button2.addEventListener('click', () => {
        alert(btn2Text.innerText);
    });

    // Grab box1 div and style backgroundColor
    let box1 = document.getElementById('box1');
    box1.style.backgroundColor = 'gray';

    // Mouse enter styles the backgroundColor
    box1.addEventListener('mouseenter', () => {
        box1.style.backgroundColor = '#555';
    });
    // Mouse leave changes it back to red
    box1.addEventListener('mouseleave', () => {
        box1.style.backgroundColor = 'gray';
    });

    // Grab text paragraph and set color.
    let someText = document.getElementById('someText');
    someText.style.color = 'red';

    // change paragraph color on click. 
    someText.addEventListener('click', () => {
        someText.style.color = getRandomColor();
    });

    // Create container div & assign class
    let container3 = document.createElement('div');
    container3.className = 'container3';
    // Create button & add values
    let button3 = document.createElement('input');
    button3.type = 'button';
    button3.value = 'Submit';
    button3.className = 'button3';
    // Append container and button to body.
    document.body.appendChild(button3);
    document.body.appendChild(container3);

    // Button click function
    button3.addEventListener('click', () => {
        // creates span element.
        let nameSpan = document.createElement('span');
        // adds name inside span
        nameSpan.innerText = 'Marques Bradley';
        // appends span inside container3
        container3.appendChild(nameSpan);
    });

    // Friends array
    let friends = ['Chris', 'John', 'James', 'Amy', 'Jared', 'Derrick', 'Aria', 'Jaliyah', 'Alanna', 'Kourtni'];

    // Grab button4
    let button4 = document.getElementById('button4');
    // button4 on click event
    button4.addEventListener('click', () => {
        for (let i = 0; i < friends.length; i++) {
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            li.innerText = friends[i];
            ul.appendChild(li);
        }
        // friends.forEach(element => {
        //     let li = document.createElement('li');
        //     let ul = document.getElementById('list');
        //     li.innerText = element[i];
        //     ul.appendChild(li.innerText);
        // });
    });


    // Get random color function.
    const getRandomColor = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };



});