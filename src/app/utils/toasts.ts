import { Toast } from '../models';

export const createToast = (message: string, type: 'success' | 'error' = 'success'): Toast => {
    const id = Date.now().toString();

    return {
        id,
        message,
        type
    };
}
