async function onRequestAwait() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"
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

function printData(dataJson) {
  const lista = document.getElementById("lista");

  for (const cryptoInfo of dataJson) {
    const a = document.createElement("a");
    a.classList.add("column");
    a.href = `cryptodetail.html?id=${cryptoInfo.id}`;
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.textContent = cryptoInfo.symbol;
    img.src = cryptoInfo.image;
    div.appendChild(p);
    div.appendChild(img);
    a.appendChild(div);
    lista.appendChild(a);
  }
}
onRequestAwait();
