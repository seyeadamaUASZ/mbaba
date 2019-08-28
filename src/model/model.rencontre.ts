import { Equipe } from './model.equipe';
import { Stade } from './model.stade';
import { Evenement } from './model.evenement';

export class Rencontre {
    id: number = null;
    heure: number = null;
    minute: number = null;
    domicile: Equipe = new Equipe();
    exterieur: Equipe = new Equipe();
    evenement: Evenement = new Evenement();
    stade: Stade = new Stade();
}
