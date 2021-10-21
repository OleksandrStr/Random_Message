
const Phrases = { 
Phrase1: ["have a problem", "feel bad", "feel unmotivated"],
Phrase2: ["you are not alone", "you can do better", "it's not for always"],
Phrase3: ["so work harder", "so make a plan and take action", "so believe in yourself"]
}

const random = (num) => {
    return Math.floor(Math.random() * num.length);
};

const randomPhrase1 = "Whenever you " + Phrases.Phrase1[random(Phrases.Phrase1)];
const randomPhrase2 = "remember that " + Phrases.Phrase2[random(Phrases.Phrase2)];
const randomPhrase3 = Phrases.Phrase3[random(Phrases.Phrase3)];

const finalPhrase = randomPhrase1 + "\n" + randomPhrase2 + "\n" + randomPhrase3;

console.log(finalPhrase);







