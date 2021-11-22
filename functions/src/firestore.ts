import * as functions from 'firebase-functions';

export const onCreateTask = functions.firestore
    .document('tasks/{id}')
    .onCreate(async (snap: any, context: any) => {
        const { id } = context.params;

        return snap.ref.update({ id });
    });
