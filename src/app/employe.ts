export class Employe {
    id: number
    nom: string
    dateEmbauche: Date
    salaire: number
    constructor(
        id: number,
        nom: string,
        dateEmbauche: Date,
        salaire: number
    ) {
        this.id = id
        this.nom = nom
        this.dateEmbauche = dateEmbauche
        this.salaire = salaire
    }
}
