const menuContainer = document.getElementById("menu");

function showCategory(category) {
  menuContainer.innerHTML = "";
  const filteredItems = menuData.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    itemDiv.innerHTML = `
      <div class="item-details">
        <h3 class="item-name">${item.name}</h3>
        ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ""}
      </div>
      <div class="item-price">${item.price}</div>
    `;
    menuContainer.appendChild(itemDiv);
  });
}

window.onload = () => {
  showCategory('aperatif');
};