import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IonCard, IonCardContent, IonContent, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { Content } from 'src/app/interfaces/content.interface';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss'],
    imports: [IonIcon, IonCardSubtitle, IonCardTitle, IonContent, IonCardContent, CommonModule, IonCard],
    standalone: true,
})
export class ContentCardComponent {
    public content = input<Content>();
}
