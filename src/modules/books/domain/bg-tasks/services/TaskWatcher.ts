import {Book} from '../../interfaces/Book';
import {TaskOptions} from '../interfaces/TaskOptions';
import {WatcherStatus} from '../enums/WatcherStatus';
import backgroundTaskService from './BackgroundTaskService';
import {RequestResponse} from '../interfaces/RequestResponse';

export class TaskWatcher {
  public watcherStatus: WatcherStatus = WatcherStatus.New;
  public watchResult: Promise<Book[] | Error>;
  private isTaskLoading: boolean = false;
  private isTaskFinished: boolean;
  private watchTimer: any;
  private timeoutTimer: any;
  private resultInterval: any;
  private watchResultResolver: (value?: Book[] | null) => void = () => {};
  private watchResultRejecter: (error?: string) => void = () => {};

  constructor(private task: TaskOptions) {
    this.watchResult = new Promise<Book[] | Error>((resolve, reject) => {
      this.watchResultResolver = resolve;
      this.watchResultRejecter = reject;
    });
    this.isTaskFinished = false;
  }

  public startWatching(): void {
    this.watcherStatus = WatcherStatus.Watching;
    this.timeoutTimer = setTimeout(() => {
      this.watcherStatus = WatcherStatus.Timeout;
      this.stopWatching();
      this.watchResultRejecter('Время ожидания задачи вышло');
    }, 10000);
    this.checkTask();
  }

  private checkTask(): void {
    if (!this.isTaskLoading) {
      this.isTaskLoading = true;
      if (this.isTaskFinished) {
        this.watcherStatus = WatcherStatus.Finished;
        this.watchResultResolver(this.task.result);
        this.stopInterval();
      } else {
        this.startWatchTimer();
      }
    }
  }

  private startResultInterval(): void {
    this.resultInterval = setInterval(() => {
      backgroundTaskService
        .requestResult(this.task)
        .then((data: RequestResponse) => {
          this.task.result = data.result;
        });
    }, 1000);
  }

  private startWatchTimer(): void {
    this.startResultInterval();
    this.watchTimer = setTimeout(() => {
      this.isTaskLoading = false;
      this.isFinished(this.task);
      this.checkTask();
    }, 5000);
  }

  private stopWatching(): void {
    if (this.timeoutTimer != null) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    if (this.watchTimer != null) {
      clearTimeout(this.watchTimer);
      this.watchTimer = null;
    }
    this.watcherStatus = WatcherStatus.Stopped;
  }

  private stopInterval(): void {
    if (this.resultInterval != null) {
      clearInterval(this.resultInterval);
      this.resultInterval = null;
    }
  }

  private isFinished(task: TaskOptions): boolean {
    if (task.result != null) {
      this.isTaskFinished = true;
    }
    return this.isTaskFinished;
  }
}
