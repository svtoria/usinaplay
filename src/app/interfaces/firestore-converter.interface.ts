import { QueryDocumentSnapshot } from '@angular/fire/firestore';

export interface Converter<T> {
    toFirestore: (doc: Partial<T>) => Partial<T>;
    fromFirestore: (snapshot: QueryDocumentSnapshot) => T;
}
