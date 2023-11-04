import { Etudiant } from "./Etudiant";

export class Contrat {
    idContrat: number;
    dateDebutContrat: Date;
    dateFinContrat: Date;
    specialite: string;
    archived: boolean;
    montantContrat: number;
    etudiant: Etudiant;
  }