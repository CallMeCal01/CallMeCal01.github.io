
var candleWaxTypes = ["Soy", "Soy + Coconut", "Coconut"];
var candleSizes = ["Tealight", "Small", "Medium", "Large"];

console.log(candleScents);
document.addEventListener('DOMContentLoaded', () => {
  const candleScents   = ["Vanilla", "Lavender", "Whiskey, Wood Smoke and Leather",
                          "Pear and Jasmine", "French Pear", "Jasmine",
                          "Peppermint", "Strawberry", "Sandalwood and Pine", "Amber"];

  const docGrid = document.getElementById('docGrid');
  if (!docGrid) return;             // guard ↩

  // Fastest: build one string then insert once
  docGrid.innerHTML = candleScents.join(', ');
});