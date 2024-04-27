import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { IonHeader, IonToolbar, IonMenu, IonButtons, IonMenuButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { accessibility, trophy } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        IonHeader,
        IonToolbar,
        CommonModule,
        IonMenu,
        IonButtons,
        IonMenuButton,
        IonIcon,
        MenuContentComponent,
        IonImg,
        NotificationsComponent,
    ],
})
export class HeaderComponent {
    constructor() {
        addIcons({ accessibility, trophy });
    }
}
