// function rollDice() {
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i = 0; i < 5; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_faces/${value}.png">`);
//     }

//     diceResult.textContent = `dice: ${values.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }


async function rollDice() {
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  diceResult.textContent = "Rolling...";
  diceImages.innerHTML = "";

  try {
    // API
    const response = await fetch("https://dice-roller-api-ns-eqate3b2hjbra0gr.centralus-01.azurewebsites.net/api/roll");

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    diceResult.textContent = "Dice: " + data.dice.join(", ");
    diceImages.innerHTML = data.imagePaths
      .map(path => `<img src="https://dice-roller-api-ns-eqate3b2hjbra0gr.centralus-01.azurewebsites.net/${path}" alt="Die">`)
      .join("");
  } catch (error) {
    console.error("Error fetching dice roll:", error);
    diceResult.textContent = "Failed to fetch dice roll.";
  }
}
