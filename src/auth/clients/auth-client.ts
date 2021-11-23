import { Observable } from 'rxjs';
import { auth } from '../../core/firebase';

export const onAuthStateChanged = (): Observable<any> => {
    return new Observable(
        subscriber => {
            const unsubscribe = auth.onAuthStateChanged(
                user => {
                    subscriber.next(user?.uid);

                    unsubscribe();
                    subscriber.complete();
                },
                error => subscriber.error(error), 
                () => {
                    subscriber.complete()
                },
            );
        }
    );
};

export const signIn = async (): Promise<string | null> => {
    const result = await auth.signInAnonymously();

    return result.user?.uid || null;
};

export const signOut = async (): Promise<void> => {
    return auth.signOut();
};
