const products = [
    {id:1,name:"iPhone",category:"Mobiles",price:70000},
    {id:2,name:"Samsung",category:"Mobiles",price:60000},
    {id:3,name:"HP Laptop",category:"Laptops",price:55000},
    {id:4,name:"Sony TV",category:"Televisions",price:40000}
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