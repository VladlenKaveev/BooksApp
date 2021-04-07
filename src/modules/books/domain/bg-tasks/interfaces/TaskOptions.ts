import {Book} from '../../interfaces/Book';

export interface TaskOptions {
  id: string;
  success: boolean;
  result?: Book[];
}
