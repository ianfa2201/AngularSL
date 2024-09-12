import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then((value) => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/user');
    })
    .catch(error => {console.log('Something went wrong', error)});
  }
}
