import { Component } from '@angular/core';
import { MockService } from '../../common/services/mock.service';

@Component({
  selector: 'app-error-handling-demo',
  templateUrl: './error-handling-demo.component.html'
})
export class ErrorHandlingDemo {

  constructor(
    private service: MockService
  ) { }

  mockErrorResponse(status: number, statusText: string) {
    console.debug('click');
    return this.service.mockErrorResponse(status, statusText).subscribe(
      a => console.debug(a)
    );
  }

}
