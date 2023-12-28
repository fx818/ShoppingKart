var addToCart = document.getElementsByClassName("addToCart");
var removeFromCart = document.getElementsByClassName("removeFromCart");
var downloadData = document.getElementsByClassName("download-data")[0];
var allItemInCart = document.getElementsByClassName("Allitems");
var recentWatchedDiv = document.getElementsByClassName("recently_watched_div");
var cartMsg = document.getElementById("cart-msg")

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// function addedBtn(){





// For the Add to cart on HomePage
for (let index = 0; index < addToCart.length; index++) {

    const element1 = addToCart[index];
    // const element2 = removeFromCart[index];

    element1.addEventListener("click", function added() {
        element1.textContent = "Added";
    });
}




// For Cart section

for (let index = 0; index < removeFromCart.length; index++) {
    const element2 = removeFromCart[index];
    element2.addEventListener("click", function removed() {
        element2.textContent = "Removing..";
        // recentWatchedDiv[index].style.display = "none";
        recentWatchedDiv[index].innerHTML = "";
    });

    
    if (removeFromCart.length === 0) {
        cartMsg.style.display = "block";
    }
    else {
        cartMsg.style.display = "none"
    }
    
}




// For the profile page

function data() {
    downloadData.textContent = "Downloading"
}
downloadData.addEventListener("click", data);




// }