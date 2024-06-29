function greet(lang){
    const messages = {
        English : "Welcome",
        Dutch : "Welkom",
        French : "BonJour",
        Arabic : "مرحبا"};
        return messages[lang] || messages["English"];
}
console.log(greet("English"))