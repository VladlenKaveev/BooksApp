import {Book} from '../../interfaces/Book';
import {TaskWatcher} from './TaskWatcher';
import {BaseRestResource} from '@snap-alex/domain-js';
import {TaskOptions} from '../interfaces/TaskOptions';
import backgroundTaskResource from '../resources/BackgroundTaskResource';
import {BooksLoadParams} from '../../interfaces/BooksLoadParams';
import {RequestResponse} from '../interfaces/RequestResponse';

enum TaskActions {
  ActionOne = 'action_one',
}

export class BackgroundTaskService {
  constructor(private backgroundTaskResource: BaseRestResource) {}

  public async createTask(
    actionName: TaskActions,
    payload: BooksLoadParams,
  ): Promise<TaskWatcher> {
    return this.backgroundTaskResource
      .create({actionName, payload})
      .then((task: TaskOptions) => {
        const taskWatcher = new TaskWatcher(task);
        taskWatcher.startWatching();
        return taskWatcher;
      });
  }

  public requestResult(task: TaskOptions): Promise<RequestResponse> {
    return this.backgroundTaskResource.create(task);
  }

  public async loadTaskResult(): Promise<Book[] | Error> {
    const taskWatcher = await this.createTask(TaskActions.ActionOne, {
      page: 1,
      per_page: 20,
    });
    return await taskWatcher.watchResult;
  }
}

const backgroundTaskService = new BackgroundTaskService(backgroundTaskResource);
export default backgroundTaskService;
