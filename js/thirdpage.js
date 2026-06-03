const products = [
    {id:1, name:"Refrigerator", category:"Appliances", price:13000, rating:3.8, image:"images/refridgerator.webp"},
    {id:2, name:"Washing Machine", category:"Appliances", price:30000, rating:4.8, image:"images/washing machine.webp"},

    {id:3, name:"iPhone", category:"Mobiles", price:70000, rating:4.8, image:"images/iphone.webp"},
    {id:4, name:"Samsung", category:"Mobiles", price:65000, rating:4.5, image:"images/samsung.webp"},

    {id:5, name:"Dell Laptop", category:"Laptops", price:55000, rating:4.3, image:"images/dell.jpeg"},
    {id:6, name:"HP Laptop", category:"Laptops", price:60000, rating:4.6, image:"images/hp.avif"},

    {id:7, name:"LG TV", category:"Televisions", price:15000, rating:4.8, image:"images/lg tv.jpg"},
    {id:8, name:"Sony TV", category:"Televisions", price:10000, rating:4.0, image:"images/sony tv.jpg"},

    {id:9, name:"Casio Watch", category:"Watches", price:12000, rating:4.5, image:"images/casio.avif"},
    {id:10, name:"Fossil Watch", category:"Watches", price:5000, rating:4.0, image:"images/fossil.jpg"},

    {id:11, name:"Boat Headphones", category:"Headphones", price:1500, rating:3.9, image:"images/boat.webp"},
    {id:12, name:"Sony Headphones", category:"Headphones", price:1000, rating:4.3, image:"images/sony.jpeg"},

    {id:13, name:"Adidas Shoes", category:"Shoes", price:5000, rating:4.9, image:"images/adidas.webp"},
    {id:14, name:"Puma Shoes", category:"Shoes", price:1000, rating:4.0, image:"images/puma.avif"},

    {id:15, name:"Dining Table", category:"Furniture", price:20000, rating:4.2, image:"images/dinning table.webp"},
    {id:16, name:"Sofa", category:"Furniture", price:30000, rating:4.5, image:"images/sofa.jpg"},

    {id:17, name:"Fiction Book", category:"Books", price:500, rating:4.5, image:"images/fiction.jpg"},
    {id:18, name:"Non-Fiction Book", category:"Books", price:800, rating:4.9, image:"images/non fiction.jpg"},

    {id:19, name:"Lipstick", category:"cosmetics", price:500, rating:4.5, image:"images/lipstick.jpg"},
    {id:20, name:"Eyeliner", category:"cosmetics", price:200, rating:3.9, image:"images/eyeliner.webp"},

    {id:21, name:"Rice Bag", category:"Grocery", price:1200, rating:4.7, image:"images/rice.jpeg"},
    {id:22, name:"Cooking Oil", category:"Grocery", price:180, rating:4.4, image:"images/oil.jpg"}
];

// GET ID FROM URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// FIND PRODUCT
const product = products.find(p => p.id == id);

// DISPLAY PRODUCT
document.getElementById("productDetail").innerHTML = `
    <div class="product-box">

        <img src="${product.image}" alt="${product.name}">

        <h2>${product.name}</h2>

        <p>Price: Rs. ${product.price.toLocaleString("en-IN")}</p>

        <p>Rating: ⭐ ${product.rating}</p>

        <button onclick="addToCart()">Add To Cart</button>
        <button onclick="buyNow()">Buy Now</button>

    </div>
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