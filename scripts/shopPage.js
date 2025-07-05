const buttons = document.querySelectorAll("[data-category]");
const products = document.querySelectorAll(".product-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    products.forEach(product => {
      const matches = category === "all" || product.dataset.category === category;
      product.style.display = matches ? "block" : "none";
    });
  });
});