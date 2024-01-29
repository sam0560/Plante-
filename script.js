const plants = [
  {
    id: 0,
    image_url: "/images/plant1.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
  {
    id: 1,
    image_url: "/images/plant2.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
  {
    id: 2,
    image_url: "/images/plant3.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
  {
    id: 3,
    image_url: "/images/plant5.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
  {
    id: 4,
    image_url: "/images/plant6.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
  {
    id: 5,
    image_url: "/images/plant7.png",
    name: "Nombre Producto",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe sunt iusto doloribus nisi explicabo iure magnam, maxime omnis mollitia non cumque dolor reiciendis repellendus quae fuga corporis praesentium quaerat? ",
    price: 13,
  },
];

const PlantListing = () => {
  const cardContainer = document.getElementById("container");

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "prd-card";

    card.innerHTML = `
        <div class="plant">
            <img src="${plant.image_url}" alt="${plant.name}">
        </div>
        <div class="flex-col plant-info">
            <!-- plant name -->
            <h3><b id="plant_name">${plant.name}</b></h3>
            <!-- description -->
            <p class="plant_desc" id="plant_desc">
                ${plant.desc.slice(0,30)} ...
            </p>
            <div class="flex-row plant-links">
                <p><b id="plant_price">${plant.price}</b>$</p>
                <a href="#">Agregar al carrito</a>
                <div class="fav-icon p-4">
                 <img src="images/vector/heart.png"
                </div>
            </div>
        </div>
        `;

        cardContainer.appendChild(card)
  });
};
window.addEventListener("load", () => {
  PlantListing();
});
