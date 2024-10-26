

//zadanie #1

function getTuple(): [number, string] {
    return [38, "Sharof"];
}

const tuple = getTuple();
console.log(tuple[0]);

//zadanie #2

enum Semains {
    lundi = "Lundi",
    mardi = "Mardi",
    mercredi = "Mercredi",
    jedi = "Jedi",
    vendredi = "Vendredi",
    samedi  = "Samedi",
    dimanche = "Dimanche",
}

function getSemains(journee: Semains) {
    return journee;
}

console.log(getSemains())