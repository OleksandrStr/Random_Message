
Phrase1 = ["have a problem", "feel bad", "feel unmotivated"];
Phrase2 = ["you are not alone", "you can do better", "it's not for always"];
Phrase3 = ["so work harder", "so make a plan and take action", "so believe in yourself"];

const random = (num) => {
    return Math.floor(Math.random() * num.length);
};

console.log("Whenever you " + Phrase1[random(Phrase1)]);
console.log("remember that " + Phrase2[random(Phrase2)]);
console.log(Phrase3[random(Phrase3)]);

