import {Book} from '../../interfaces/Book';

export interface RequestResponse {
  _status: number;
  result: Book[];
  status: boolean;
}
