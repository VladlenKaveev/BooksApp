import {BaseRestResource} from '@snap-alex/domain-js';
import {BackgroundTaskOptions} from '../interfaces/BackgroundTaskOptions';
import backgroundTaskResource from '../resources/BackgroundTaskResource';
import {Book} from '../../interfaces/Book';

export class BackgroundTaskService {
  constructor(private backgroundTaskResource: BaseRestResource) {}

  private async createBgTask(): Promise<Book[]> {
    const taskOptions: BackgroundTaskOptions = {
      task_id: 1,
      status: true,
      success: false,
    };
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (taskOptions.status) {
          taskOptions.success = true;
          this.load(taskOptions).then(data => {
            console.log(data);
            resolve(data.result);
          });
        } else {
          setInterval(() => {
            console.log('executing...');
            //тут запрашиваем статус
            //написать хелпер который изменит status
          }, 5000);
        }
      });
    });
  }

  public async getResult(): Promise<Book[]> {
    return await this.createBgTask().then(result => {
      return result;
    });
  }

  private load(options: BackgroundTaskOptions): Promise<Book[]> {
    return this.backgroundTaskResource.get(options);
  }
}

const backgroundTaskService = new BackgroundTaskService(backgroundTaskResource);
export default backgroundTaskService;
