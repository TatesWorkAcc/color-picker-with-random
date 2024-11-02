const body = document.getElementsByTagName("body")[0]
// gets the element body from the html and assigns is to body, this will be used to change the body elements background to a color
function setColor(name) {
    // takes in an text input and out puts it as name
    body.style.backgroundColor = name;
    // sets the background as the parameters color
}


function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    // math.random generates a random number between 0 and 1 and multiplies against 255 to get random values for the rgb

    const color = `rgb(${red}, ${green}, ${blue})`
    // puts the colors in an rgb
    body.style.backgroundColor = color;
    // sets the backgroung to the random color
}