let num = Number(prompt("Entrez le nombre d'éléments : "));

let tableau = [];
let sum = 0;

for (let i = 0; i < num; i++) {
    let n = Number(prompt(`Entrez l'élément ${i + 1} :`));

    tableau.push(n);
    sum += n;
}

console.log(`La somme des éléments est : ${sum}`);