import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
      console.debug(error);
      alert('Unexpected error has occured');
    }

}
