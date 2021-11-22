import { firestore } from '../../core/firebase';

export const getTasks = async (): Promise<any[]> => {
    const snapshot = await firestore.collection('tasks').get();
    const data = snapshot.docs.map(doc => doc.data());

    return data;
};

export const createTask = async (description: string): Promise<any> => {
    const tasksRef = firestore.collection('tasks');

    const task = {
        description,
        isCompleted: false
    };

    const { id } = await tasksRef.add(task);

    return { ...task, id };
};

export const updateTask = async (id: string, { description, isCompleted }: { description?: string; isCompleted?: boolean; }): Promise<any> => {
    const taskRef = firestore.doc(`tasks/${id}`);

    return taskRef.update({
        ...(description ? { description } : null),
        ...(isCompleted ? { isCompleted } : null)
    })
};
