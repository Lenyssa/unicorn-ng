import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'unicorn-ng';

    // POUR DES INFOS SUR LE CORS
    // https://developer.mozilla.org/fr/docs/Web/HTTP/CORS

    // POUR LA PWA
    // DIFICILE A DEBUGER CAR GESTION DANS LE LOCAL AJOUTER PLUTOT EN FIN DE PROJET
}
