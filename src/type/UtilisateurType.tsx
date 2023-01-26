import {UtilisateurCompType} from "./UtilisateurCompType";

export type UtilisateurType = {
  id: string;
  prenom: string;
  nom: string;
  competences: UtilisateurCompType[];
};
