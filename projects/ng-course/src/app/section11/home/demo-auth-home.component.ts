import { AuthService } from '../../common/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'demo-auth-home',
  templateUrl: './demo-auth-home.component.html',
  styleUrls: ['./demo-auth-home.component.css']
})
export class DemoAuthHomeComponent {

  constructor(private authService: AuthService) { }
}
