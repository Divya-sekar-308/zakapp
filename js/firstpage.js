document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;
        window.location.href = "secondpage.html?cat=" + category;
    });
});

card.addEventListener("click", () => {
    alert("Clicked");
});