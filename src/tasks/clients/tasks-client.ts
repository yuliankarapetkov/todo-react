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

    const snapshot = await tasksRef
        .orderBy('createdAt', 'desc')
        .get();

    const data = snapshot.docs
        .map(doc => doc.data())
        .map(task => ({ ...task, createdAt: new Date(task.createdAt * 1000).toISOString() }));

    return data;
};

export const createTask = async (description: string): Promise<any> => {
    const tasksRef = getTasksRef();

    const task = {
        description,
        isCompleted: false
    };

    const { id } = await tasksRef.add(task);

    const createdAt = new Date().toISOString();

    return { ...task, id, createdAt };
};

export const updateTask = async (id: string, { description, isCompleted }: { description?: string; isCompleted?: boolean; }): Promise<any> => {
    const tasksRef = getTasksRef();

    const taskRef = tasksRef.doc(id);

    return taskRef.update({
        ...(description !== null ? { description } : null),
        ...(isCompleted !== null ? { isCompleted } : null)
    })
};

export const removeTask = async (id: string): Promise<any> => {
    const tasksRef = getTasksRef();

    const taskRef = tasksRef.doc(id);

    return taskRef.delete();
};
