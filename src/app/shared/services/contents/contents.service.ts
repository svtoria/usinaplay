import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/bases/services/firebase/firebase.service';
import { Content } from 'src/app/interfaces/content.interface';

@Injectable({
    providedIn: 'root',
})
export class ContentsService extends FirebaseService<Content> {
    constructor() {
        super('contents');
    }
}
