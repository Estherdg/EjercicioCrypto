const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function onRequestAwait() {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const usersJson = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    printData(usersJson);
  } catch (error) {
    console.log(error);
  }
}
onRequestAwait();

function printData(crypto) {
  const name = document.getElementById("name");
  const imagen = document.getElementById("imagen");
  const price = document.getElementById("price");
  const change = document.getElementById("change");
  name.textContent = crypto.name;
  imagen.src = crypto.image.large;
  price.textContent = `${crypto.market_data.current_price.eur}€`;

  if (crypto.price_change_24h > 0) {
    console.log("En subida");
    change.src =
      "https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-haut-vert.png";
  } else {
    console.log("En bajada");
    change.src =
      "https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-bas-rouge.png";
  }
}
