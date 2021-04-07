import {Book} from '../../interfaces/Book';
import {TaskOptions} from '../interfaces/TaskOptions';
import {WatcherStatus} from '../enums/WatcherStatus';

export class TaskWatcher {
  public watcherStatus: WatcherStatus = WatcherStatus.New;
  public watchResult: Promise<Book[]>;
  private isTaskLoading: boolean = false;
  private isTaskFinished: (task: TaskOptions) => boolean;
  private watchTimer: any;
  private timeoutTimer: any;
  private watchResultResolver: (value: Book[]) => void = () => {};
  private watchResultRejecter: (error?: string) => void = () => {};

  constructor(private task: TaskOptions) {
    this.watchResult = new Promise<TaskOptions>((resolve, reject) => {
      this.watchResultResolver = resolve;
      this.watchResultRejecter = reject;
    });
  }

  public startWatching(): void {
    this.watcherStatus = WatcherStatus.Watching;
    this.timeoutTimer = setTimeout(() => {
      this.watcherStatus = WatcherStatus.Timeout;
      this.stopWatching();
      this.watchResultRejecter('Время ожидания задачи вышло');
    }, 5000);
    this.checkTask();
  }

  public checkTask(): Promise<any> {
    if (!this.isTaskLoading) {
      this.isTaskLoading = true;
      if (this.isFinished(this.task)) {
        this.watcherStatus = WatcherStatus.Finished;
        //результат
        this.watchResultResolver(this.task.result);
      } else {
        this.checkTaskAgain();
      }
    }
  }

  public checkTaskAgain(): void {
    //повторная проверка задачи
    this.watchTimer = setTimeout(() => {
      this.checkTask();
    }, 5000);
  }

  public stopWatching(): void {
    if (this.timeoutTimer != null) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    this.watcherStatus = WatcherStatus.Stopped;
  }

  public isFinished(task: TaskOptions): boolean {
    return task.result != null && this.isTaskFinished(task);
  }
}
