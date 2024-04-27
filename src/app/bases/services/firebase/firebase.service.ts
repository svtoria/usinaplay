import { Inject, Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, QueryDocumentSnapshot, collection, doc, getDoc, collectionData } from '@angular/fire/firestore';
import { Converter } from 'src/app/interfaces/firestore-converter.interface';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService<T> {
    private firestore = inject(Firestore);
    private collectionRef!: CollectionReference<Partial<T>>;
    private converter = () => ({
        toFirestore: (doc: Partial<T>) => doc,
        fromFirestore: (snapshot: QueryDocumentSnapshot): Partial<T> => {
            return snapshot.data() as T;
        },
    });

    constructor(@Inject(String) collectionName: string, @Inject(Function) converter?: () => Converter<T>) {
        if (converter) {
            this.converter = converter;
        }
        this.collectionRef = collection(this.firestore, collectionName).withConverter(this.converter());
    }

    public getDocs() {
        return collectionData(this.collectionRef);
    }

    public getDoc(id: string) {
        const docRef = doc(this.collectionRef, id);
        return getDoc(docRef);
    }
}
