// EX1.: Add an h1 tag with the name of your shop
const h1change = function () {
    let h1 = document.querySelector("h1")
    h1.innerText = " The title has changed!"
    }
    const h1return = function () {
        let h11 = document.querySelector("h1")
        h11.innerText = " Welcome to Mac Greco's Shop!!!!"
    }
    
    //EX8.: Write a function to change the page background color
    const changeColor = function () {

        let myBody = document.getElementsByTagName("body")[0]
        myBody.style.backgroundColor=rngC()  // the random color generator
    }

   // EX9.: Write a function to change the footer address with a fake one

    const changeAddress = function (){
        let iframe = document.querySelector("footer iframe") // it targets the iframe inside the footer 
        let address = document.querySelector("footer p")    // and then the "P" inside the footer
        // then with .src you can change the value of src as it's considered an object
     iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509.860434851024!2d25.0769445262286!3d35.33255432110825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a57451616df1b%3A0xda96edc6fc869157!2zzpHOsy4gzpTOt868zq7PhM-BzrnOv8-CIDcxNCAxNA!5e0!3m2!1sel!2sgr!4v1615843589176!5m2!1sel!2sgr"
     address.innerText= "Address : Ag. Dimitrios , Heraklion, Crete"
    }
    
    // EX10.: Write a function to add a CSS class to every Amazon link
    const cssClass = function (){
        let a = document.getElementsByTagName("a")
        for (i=0 ; i<a.length;i++) {
            a[i].classList.add("new-class")   // .classList.add("You can add new class here :D")
        }
    }
    //EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
    const invi = function() {
        let b = document.getElementsByTagName("img")
        for ( i=0 ; i<b.length ;i++) {
            b[i].classList.add("invisible") // here i just add a class where the pixels of the photo are 0
        }
    }
    // EX12: Write a function to color the price of each product in a different one every time it's invoked
    
const rngC = function (){
    let red = Math.round(Math.random()*255)    // RANDOM COLOR GENERATOR  (random red )
    let green = Math.round(Math.random()*255)  // RANDOM COLOR GENERATOR  (random green )
    let blue = Math.round(Math.random()*255)   // RANDOM COLOR GENERATOR  (random blue )
    return `rgb(${red},${green},${blue})`
}
const priceColor = function (){
    let c = document.getElementsByClassName("price")      // here it changes the style of each class="price" and even there is a rule in css for that in the head of the page
    for ( i=0 ; i<c.length ;i++) {                        // the inline rule seems to be stronger and therefore it works!
        c[i].style.color=rngC()
    }
}
