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
