import {BackgroundTaskOptions} from '../interfaces/BackgroundTaskOptions';

export const taskOptions: BackgroundTaskOptions = {
  task_id: 1,
  status: false,
  success: false,
};

//пока что не придумал

export function StatusGenerator() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      taskOptions.status = false;
      resolve(taskOptions.status);
    }, 5000);
  });
}
