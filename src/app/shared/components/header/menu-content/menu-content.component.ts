import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { accessibility, exit, home, trophy } from 'ionicons/icons';

@Component({
    selector: 'app-menu-content',
    templateUrl: './menu-content.component.html',
    styleUrls: ['./menu-content.component.scss'],
    standalone: true,
    imports: [IonContent, IonIcon],
})
export class MenuContentComponent {
    constructor() {
        addIcons({ home, accessibility, trophy, exit });
    }
}
