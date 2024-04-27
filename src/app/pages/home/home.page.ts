import { CUSTOM_ELEMENTS_SCHEMA, Component, Signal, computed, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ContentsService } from 'src/app/shared/services/contents/contents.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentsSwiperComponent } from './contents-swiper/contents-swiper.component';
import { Content } from 'src/app/interfaces/content.interface';
import { Observable } from 'rxjs';
import { IonSpinner } from '@ionic/angular/standalone';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [HeaderComponent, ContentsSwiperComponent, IonSpinner],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
    private contentsService = inject(ContentsService);

    public contents = this.fetchContents() as Signal<Content[]>;
    public personal = computed(() => this.contents()?.filter((content) => content.category === 'personal') as Content[]);
    public programs = computed(() => this.contents()?.filter((content) => content.category === 'programs') as Content[]);
    public allContents = computed(() => this.contents()?.filter((content) => content.type === 'content') as Content[]);

    constructor() {
        addIcons({ addCircleOutline });
    }

    public fetchContents() {
        return toSignal(this.contentsService.getDocs() as Observable<Content[]>);
    }
}
