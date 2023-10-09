const products = [
  { name: "ham", price: 50, image: "ham.jpg" },
  { name: "pork", price: 30, image: "pork.jpg" },
  { name: "beef", price: 70, image: "veal.jpg" },
  { name: "mutton", price: 20, image: "mutton.jpg" },
  { name: "pollutry", price: 15, image: "pollutry.jpg" },
  { name: "chevon", price: 65, image: "chevon.jpg" },
  { name: "venison", price: 45, image: "venison.jpg" },
];

$(document).ready(createDiv);


function SortByPrice() { //initilize function
    products.sort((a, b) => a.price - b.price); //sorts by price :)
    createDiv()
}
function SortByName(){ //starts function
    products.sort((a, b) => a.name.localeCompare(b.name)); // sorts by name
    createDiv()
}
// Attach the searchProducts function to the input's "keyup" event using jQuery
$('#searchInput').keyup(searchProducts);

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
function updateProductList() {
  $("#productList").empty(); // Clear existing divs

  const searchText = $('#search-input').val().toLowerCase();
  
  const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
  );

  for (var i = 0; i < filteredProducts.length; i++) {
      var product = filteredProducts[i];

      // Create a div for each item
      var div = $('<div class="meat-box">');

      // Load the product image
      var img = $('<img class="meat-img">').attr({
          src: 'img/' + product.image, // Assuming the images are in a folder named 'img'
          alt: 'photo of ' + product.name, // Name in alt text for accessibility
      });

      // Create a paragraph element to display product information
      var p = $('<p>').text('This is ' + product.name + '! Costs ' + product.price);

      // Add both the image and paragraph to the div
      div.append(img, p);

      // Add the div to the container with the ID 'productList'
      $('#productList').append(div);
  }
}

// Attach the updateProductList function to the input's "keyup" event using jQuery
$('#searchInput').keyup(updateProductList);

// Call the updateProductList function initially to load all products

