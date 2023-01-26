import {IdObject} from "./IdObject";

export type CompetenceType = {
  id: string;
  nom: string;
  description: string;
  image: string;
  utilisateur: IdObject[];
};
