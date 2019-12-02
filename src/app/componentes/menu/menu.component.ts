import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( public authservice: AuthService) { }

  cerrarSesion() {
    this.authservice.logout();
  }

  ngOnInit() {}

}
