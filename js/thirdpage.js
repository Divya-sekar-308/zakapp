const products = [
    {id:1, name:"iPhone", price:70000, rating:4.5},
    {id:2, name:"Samsung", price:60000, rating:4.2},
    {id:3, name:"HP Laptop", price:55000, rating:4.4},
    {id:4, name:"Sony TV", price:40000, rating:4.1}
];

// GET PRODUCT ID FROM URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// FIND PRODUCT
const product = products.find(p => p.id == id);

// DISPLAY PRODUCT
document.getElementById("productDetail").innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: Rs. ${product.price.toLocaleString("en-IN")}</p>
    <p>Rating: ⭐ ${product.rating}</p>

    <button onclick="addToCart()">Add To Cart</button>
    <button onclick="buyNow()">Buy Now</button>
`;

let cartCount = 0;

// ADD TO CART
function addToCart(){
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

// BUY NOW
function buyNow(){
    window.location.href = "fourthpage.html";
}