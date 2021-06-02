$(document).ready(function () {
    // Create a container div
    $('body').append('<div id="container" class="con1"></div>');

    // Create button 1
    $('div.con1').append('<input id="button1" type="button" value="submit"></input>');

    // Button1 click function
    $('#button1').click(() => {
        alert('An apple a day keeps the doctor away!');
    });
    
    // Button 2 click function
    $('#button2').click((e) => {
        // Selects p text and inputs into alert. 
        let textBoxText = $('#textBox').text();
        alert(`Weee! ${textBoxText}`);
    });

    // Hover function for box1 div. 
    $('div#box1').hover((e) => {
        $('div#box1').css('background-color', 'yellow');
    }, () => {
        $('div#box1').css('background-color', '');
    });

    // P click function that change to random color. 
    $('p#someText').click((e) => {
        $('p#someText').css('color', getRandomColor);
    });    
    
    // Get random color function.
    const getRandomColor = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };

    // Create container
    $('body').append('<div id="container" class="con3"></div>');
    // create button and insert
    $('div.con3').append('<input id="button3" type="button" value="submit"></input>');
    // create box2 and insert
    $('div.con3').append('<div id="box2"></div>');

    // Button3 click function
    $('#button3').click(() => {
        $('#box2').append('<span>Marques Bradley</span>');
    });

    // Friends array
    let friends = ['Chris', 'John', 'James', 'Amy', 'Jared', 'Derrick', 'Aria', 'Jaliyah', 'Alanna', 'Kourtni'];

    // Button4 click function that adds li per name in friends array.
    $('#button4').click(() => {
        for (let i = 0; i < friends.length; i++) {
            $('#list').append('<li>' + friends[i] + '</li>');
        }
    });


});
