const products = [
  { name: "Ham", price: 50, image: "ham.jpg" },
  { name: "Pork", price: 30, image: "pork.jpg" },
  { name: "Beef", price: 70, image: "veal.jpg" },
  { name: "Mutton", price: 20, image: "mutton.jpg" },
  { name: "Pollutry", price: 15, image: "pollutry.jpg" },
  { name: "Chevon", price: 65, image: "chevon.jpg" },
  { name: "Venison", price: 45, image: "venison.jpg" },
];

$(document).ready(createDiv);


document.addEventListener("DOMContentLoaded", function () {
  //waits for the page to be loaded
  const select = document.getElementById("sort-select"); //finds the selection box

  select.addEventListener("change", () => {
    //waits for the change in selection box
    const selectedValue = select.value; //finds the value

    if (selectedValue === "price") {
      //checks if the value is "price", if so runs code
      SortByPrice();
    }
    else{
        SortByName()
    }
  });
});
function SortByPrice() { //initilize function
    products.sort((a, b) => a.price - b.price); //sorts by price :)
    createDiv()
}
function SortByName(){ //starts function
    products.sort((a, b) => a.name.localeCompare(b.name)); // sorts by name
    createDiv()
}

function createDiv(){
    $("#productList").html(""); //clears div

    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        // makes a div for each item
        var div = $('<div class="meat-box">');

        // loads dog!
        var img = $('<img class="meat-img">').attr({
            src: '/img/' + product.image, // loads specific img
            alt: 'photo of ' + product.name, // name in alt text for accesibility'
          });
        // adds all the info
        var p = $('<p>').text('This is ' + product.name + '! Costs ' + product.price);

        // adds both to div
        div.append(img, p);

        // adds div to container
        $('#productList').append(div);
    }
}
