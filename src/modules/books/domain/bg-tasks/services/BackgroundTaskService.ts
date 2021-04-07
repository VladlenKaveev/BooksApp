import {Book} from '../../interfaces/Book';
import {TaskWatcher} from './TaskWatcher';
import {BaseRestResource} from '@snap-alex/domain-js';
import {TaskOptions} from '../interfaces/TaskOptions';
import backgroundTaskResource from '../resources/BackgroundTaskResource';
import {BooksLoadParams} from '../../interfaces/BooksLoadParams';

enum TaskActions {
  ActionOne = 'action_one',
}

export class BackgroundTaskService {
  constructor(private backgroundTaskResource: BaseRestResource) {}

  public createTask(
    actionName: TaskActions,
    payload: BooksLoadParams,
  ): Promise<TaskWatcher> {
    //возвращает watcher
    return this.backgroundTaskResource
      .create({actionName, payload})
      .then((task: TaskOptions) => {
        //передаем task в watcher
        const taskWatcher = new TaskWatcher(task);
        //старт наблюдения
        taskWatcher.startWatching();
        return taskWatcher;
      });
  }

  public async loadData(): Promise<Book[]> {
    const taskWatcher = await this.createTask(TaskActions.ActionOne, {
      page: 1,
      per_page: 20,
    });
    return await taskWatcher.watchResult;
  }
}

const backgroundTaskService = new BackgroundTaskService(backgroundTaskResource);
export default backgroundTaskService;
