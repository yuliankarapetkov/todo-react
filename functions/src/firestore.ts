import * as functions from 'firebase-functions';

export const onCreateTask = functions.firestore
    .document('users/{userId}/tasks/{taskId}')
    .onCreate(async (snap: any, context: any) => {
        const { taskId } = context.params;

        const createdAt = new Date();

        return snap.ref.update({ id: taskId, createdAt });
    });
