console.log("--- Ari chingaching xaxanq :)  (Rock, Paper, Scissors) ---");
console.log("Управление:");
console.log("[R] — Rock (qar)");
console.log("[P] — Paper (tuxt)");
console.log("[S] — Scissors (mkrat)");
console.log("-------------------------------------------");

      
const gameData = {
    r: { name: 'qar', beats: 's' },
    p: { name: 'tuxt', beats: 'r' },
    s: { name: 'mkrat', beats: 'p' }
};

function play(userChoice) {
    const userKey = userChoice.toLowerCase();
  
    if (!gameData[userKey]) {
        console.error("Zguyshhh!!!!!!!!  Verevum nshvac e te inch knopka e petq sexmel!!!!");
        return;
    }

    const keys = Object.keys(gameData);
    const computerKey = keys[Math.floor(Math.random() * keys.length)];

    console.log(`qo yntracy: ${gameData[userKey].name}`);
    console.log(`im yntracy: ${gameData[computerKey].name}`);

    const result = userKey === computerKey 
        ? "nishyaya! 🤝" 
        : (gameData[userKey].beats === computerKey ? "du krecir! 🎉" : "es kreci! 🤖");

    console.log(`yly nayii : ${result}`);
    console.log("-------------------------------------------");
}


