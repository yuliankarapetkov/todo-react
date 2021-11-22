import { firestore } from '../../core/firebase';

export const getTasks = async (): Promise<any[]> => {
    const snapshot = await firestore.collection('tasks').get();
    const data = snapshot.docs.map(doc => doc.data());

    return data;
};

export const createTask = async (task: any): Promise<any> => {
    const tasksRef = firestore.collection('tasks');

    return tasksRef.add(task);
};
