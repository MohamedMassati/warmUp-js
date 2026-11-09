function calculerMoyenne(nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum / nums.length;
}

let entree = prompt("Entrez les nombres séparés par des espaces : ");

let nums = entree.split(" ").map(Number).filter(n => !isNaN(n))

if (nums.length === 0) {
    console.log("Aucun nombre valide entré !");
} else {
    let moyenne = calculerMoyenne(nums);
    console.log(`La moyenne est de ${moyenne}`);
}
