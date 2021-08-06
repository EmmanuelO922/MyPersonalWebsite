const body = document.querySelector('body');
body.style['background-color'] = 'black';
body.style.color = "lawngreen";

const themeButton = document.querySelector('button');

function theme(){
    if(body.style['background-color'] == 'black'){
        body.style['background-color'] = 'white'
        body.style['color'] = 'black';
    }
    else{
        body.style['background-color'] = 'black'
        body.style['color'] = 'lawngreen';
    }
}

themeButton.addEventListener('click',theme);