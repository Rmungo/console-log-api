function getValue(){
    $('.enterNum').on('click', function(event){
        event.preventDefault();
            numOfPics = $('.typeNum').val();
        if (numOfPics > 50){
            alert('Choose a number between 1 and 50');
        }
        else {
            getPics();
        }
    })
}

function getPics(){
    for (let i = 1; i <= numOfPics; i++){
        fetchPics();
    }
}

function fetchPics(){
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(responseJson=> console.log(responseJson));
    
}

function ready(){
    console.log('we reaaaady');
    getValue();
}


$(ready());