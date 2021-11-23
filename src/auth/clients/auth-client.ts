import { Observable } from 'rxjs';
import { auth } from '../../core/firebase';

export const onAuthStateChanged = (): Observable<any> => {
    return new Observable(
        subscriber => {
            auth.onAuthStateChanged(
                user => subscriber.next(user), // nextOrObserver
                error => subscriber.error(error), 
                () => {
                    subscriber.complete()
                },
            );
        }
    );
};

export const signIn = async (): Promise<any> => {
    return auth.signInAnonymously();
};

export const signOut = async (): Promise<void> => {
    return auth.signOut();
};
