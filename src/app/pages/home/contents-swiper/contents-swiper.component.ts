import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Content } from 'src/app/interfaces/content.interface';
import { ContentCardComponent } from 'src/app/shared/components/content-card/content-card.component';

@Component({
    selector: 'app-contents-swiper',
    templateUrl: './contents-swiper.component.html',
    styleUrls: ['./contents-swiper.component.scss'],
    standalone: true,
    imports: [CommonModule, ContentCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentsSwiperComponent {
    public title = input<string>('');
    public hasNewContents = input<boolean>(false);
    public canAddNewContents = input<boolean>(false);
    public contents = input<Content[]>([]);
}
