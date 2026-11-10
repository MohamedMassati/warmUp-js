let courses = [];
let choix;

while (true) {
    console.log("\nGestionnaire de liste de courses");
    console.log("1. Ajouter un article");
    console.log("2. Supprimer un article");
    console.log("3. Afficher la liste des courses");
    console.log("4. Quitter");

    choix = Number(prompt("Choisissez une option : "));

    switch (choix) {
        case 1:
            let article = prompt("Entrez l'article à ajouter : ");

            if (article && article.trim() !== "") {
                courses.push(article.trim());
                console.log("Article ajouté à la liste.");
            } else {
                console.log("Article Invalide !");
            }
            break;

        case 2:
            let supprimer = prompt("Entrez l'article à supprimer :");
            let index = courses.indexOf(supprimer);

            if (index !== -1) {
                courses.splice(index, 1);
                console.log("Article supprimé à la liste.");
            } else {
                console.log("Article Invalide !");
            }
            break;

        case 3:
            if (courses.length === 0) {
                console.log("Votre liste de courses est vide.");
            } else {
                console.log("Votre liste de courses actuelle :");

                courses.forEach((article, index) => {
                    console.log(`${index + 1}. ${article}`);
                });
            }
            break;

        case 4:
            console.log("Merci d'avoir utilisé le gestionnaire de courses !");
            break;

        default:
            console.log("Option invalide ! Choisissez entre 1 et 4.");
    }

    if (choix === 4) {
        break
    }
}