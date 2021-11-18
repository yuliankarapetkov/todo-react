import { actions } from './tasks-slice';

const MOCK_TASKS = [
  {
      description: 'Do something',
      isCompleted: false,
      key: 'v1'
  },
  {
      description: 'Do something else',
      isCompleted: false,
      key: 'v2'
  },
  {
      description: 'Do another thing',
      isCompleted: false,
      key: 'v3'
  },
];

export const fetchTasks = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    };

    try {
      dispatch(actions.getTasks());

      await fetchData();

      dispatch(actions.getTasksSuccess(MOCK_TASKS));
    } catch (error) {
      dispatch(actions.getTasksFailure());
    }
  };
};
