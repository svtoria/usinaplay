import { IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { notifications } from 'ionicons/icons';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    standalone: true,
    imports: [IonButtons, IonIcon],
})
export class NotificationsComponent {
    constructor() {
        addIcons({ notifications });
    }
}
