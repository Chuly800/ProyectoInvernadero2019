import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor( public authservice: AuthService, public menuCtrl: MenuController, private db: AngularFirestore) {
  }
  // getName() {
  //   this.afd.list('usuarios/').valueChanges().subscribe(
  //     data => {
  //       console.log(data);
  //       this.items = data;
  //     }
  //   );
// const userId = firebase.auth().currentUser.uid;

  cerrarSesion() {
    this.authservice.logout();
    this.menuCtrl.close();
  }
// return firebase.database().ref('usuarios'.userId).once('value').then(function(snapshot) {
//     const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });




}
