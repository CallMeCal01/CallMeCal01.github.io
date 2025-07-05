document.addEventListener("DOMContentLoaded", () => {
  const candleScents = [
    "Vanilla",
    "Lavender",
    "Whiskey, Wood Smoke and Leather",
    "Pear and Jasmine",
    "French Pear",
    "Jasmine",
    "Peppermint",
    "Strawberry",
    "Sandalwood and Pine",
    "Amber"
  ];

  const candleWaxTypes = ["Soy", "Coconut", "Soyacoco"];
  const candleSizes = ["Tealight", "Small", "Medium", "Large"];

  const gridScents = document.getElementById("gridScents");
  const gridWaxes = document.getElementById("gridWaxes");
  const gridSizes = document.getElementById("gridSizes");
  if (!gridScents || !gridWaxes || !gridSizes) return; // guard

  /* build once, assign once */
  gridScents.innerHTML = candleScents.join(", <br>");
  gridWaxes.innerHTML = candleWaxTypes.join(", <br>");
  gridSizes.innerHTML = candleSizes.join(", <br>");
});