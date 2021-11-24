import { firestore } from '../../app/firebase';
import { getUserId } from '../../app/utils';

const getTasksRef = () => {
    const userId = getUserId() || undefined;

    return firestore
        .collection('users')
        .doc(userId)
        .collection('tasks');
}

export const getTasks = async (): Promise<any[]> => {
    const tasksRef = getTasksRef();

    const snapshot = await tasksRef.get();
    const data = snapshot.docs.map(doc => doc.data());

    const uid = getUserId();
    console.log('uid', uid);

    return data;
};

export const createTask = async (description: string): Promise<any> => {
    const tasksRef = getTasksRef();

    const task = {
        description,
        isCompleted: false
    };

    const { id } = await tasksRef.add(task);

    return { ...task, id };
};

export const updateTask = async (id: string, { description, isCompleted }: { description?: string; isCompleted?: boolean; }): Promise<any> => {
    const tasksRef = getTasksRef();

    const taskRef = tasksRef.doc(`tasks/${id}`);

    return taskRef.update({
        ...(description !== null ? { description } : null),
        ...(isCompleted !== null ? { isCompleted } : null)
    })
};

export const removeTask = async (id: string): Promise<any> => {
    const tasksRef = getTasksRef();

    const taskRef = tasksRef.doc(`tasks/${id}`);

    return taskRef.delete();
};
