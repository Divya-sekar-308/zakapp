const products = [
    { id: 1, name: "Refrigerator", category: "Appliance", price: 13000, rating: 3.8, image: "images/refridgerator.webp" },
    { id: 2, name: "Washing Machine", category: "Appliance", price: 30000, rating: 4.8, image: "images/washing machine.webp" },

    { id: 3, name: "iPhone", category: "Mobiles", price: 70000, rating: 4.8, image: "images/iphone.webp" },
    { id: 4, name: "Samsung", category: "Mobiles", price: 65000, rating: 4.5, image: "images/samsung.webp" },

    { id: 5, name: "Dell Laptop", category: "Laptops", price: 55000, rating: 4.3, image: "images/dell.jpeg" },
    { id: 6, name: "HP Laptop", category: "Laptops", price: 60000, rating: 4.6, image: "images/hp.avif" },

    { id: 7, name: "LG TV", category: "Televisions", price: 15000, rating: 4.8, image: "images/lg tv.jpg" },
    { id: 8, name: "Sony TV", category: "Televisions", price: 10000, rating: 4.0, image: "images/sony tv.jpg" },

    { id: 9, name: "Casio Watch", category: "Watches", price: 12000, rating: 4.5, image: "images/casio.avif" },
    { id: 10, name: "Fossil Watch", category: "Watches", price: 5000, rating: 4.0, image: "images/fossil.jpg" },

    { id: 11, name: "Boat Headphones", category: "Headphones", price: 1500, rating: 3.9, image: "images/boat.webp" },
    { id: 12, name: "Sony Headphones", category: "Headphones", price: 1000, rating: 4.3, image: "images/sony.jpeg" },

    { id: 13, name: "Adidas Shoes", category: "Shoes", price: 5000, rating: 4.9, image: "images/adidas.webp" },
    { id: 14, name: "Puma Shoes", category: "Shoes", price: 1000, rating: 4.0, image: "images/puma.avif" },

    { id: 15, name: "Dining Table", category: "Furniture", price: 20000, rating: 4.2, image: "images/dinning table.webp" },
    { id: 16, name: "Sofa", category: "Furniture", price: 30000, rating: 4.5, image: "images/sofa.jpg" },

    { id: 17, name: "Fiction Book", category: "Book", price: 500, rating: 4.5, image: "images/fiction.jpg" },
    { id: 18, name: "Non-Fiction Book", category: "Book", price: 800, rating: 4.9, image: "images/non fiction.jpg" },

    { id: 19, name: "Lipstick", category: "cosmetics", price: 500, rating: 4.5, image: "images/lipstick.jpg" },
    { id: 20, name: "Eyeliner", category: "cosmetics", price: 200, rating: 3.9, image: "images/eyeliner.webp" },

    { id: 21, name: "Rice Bag", category: "Grocery", price: 1200, rating: 4.7, image: "images/rice.jpeg" },
    { id: 22, name: "Cooking Oil", category: "Grocery", price: 180, rating: 4.4, image: "images/oil.jpg" }
];

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

document.getElementById("title").innerText = category;

let filtered = products.filter(p => p.category === category);

function display(list){
    const container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Rs. ${p.price.toLocaleString("en-IN")}</p>
        `;

        div.onclick = () => {
            window.location.href = "thirdpage.html?id=" + p.id;
        };

        container.appendChild(div);
    });
}

display(filtered);

// SORT
document.getElementById("sort").addEventListener("change", function(){
    let sorted = [...filtered];

    if(this.value === "low"){
        sorted.sort((a,b)=>a.price-b.price);
    }
    if(this.value === "high"){
        sorted.sort((a,b)=>b.price-a.price);
    }

    display(sorted);
});