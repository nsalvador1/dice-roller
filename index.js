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
  const sides = 6;   // number of sides
  const count = 5;   // number of dice to roll

  // Azure backend URL
  const baseUrl = 'https://node-js-on-azure-ns-a6hqg8c8ghfmfbfh.centralus-01.azurewebsites.net';

  // Wake up backend first (optional but helpful)
  await fetch(`${baseUrl}/wake`);

  try {
    // Call your backend’s /roll endpoint
    const res = await fetch(`${baseUrl}/roll?sides=${sides}&count=${count}`);
    const data = await res.json();

    // Build your image list
    let images = [];
    data.rolls.forEach(num => {
      images.push(`images/dice${num}.png`);
    });

    // Use your existing display logic (whatever shows the dice)
    displayDice(images);

  } catch (err) {
    console.error('Error rolling dice:', err);
  }
}
