import { AppError } from './app.error';

export class BadInputError extends AppError {

  constructor(
    public post?: any
  ) {
    super(null);
  }
}
