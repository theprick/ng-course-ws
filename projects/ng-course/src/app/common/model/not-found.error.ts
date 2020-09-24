import { AppError } from './app.error';

export class NotFoundError extends AppError {

  constructor(
    public id?: number
  ) {
    super(null);
  }

}
