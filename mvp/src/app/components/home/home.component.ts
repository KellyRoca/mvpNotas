import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../modales/login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  durationInSeconds = 4;
  iscorrect!: boolean;
  user!: string;
  password!: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      disableClose: true,
      data: { user: this.user, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result.user === 'g.lozano' && result.password === 'admin321') {
        this.router.navigate(['/estudiante'], { queryParams: { id: '1' } })
      } else if (result === true || (result.user === undefined || result.password === undefined)) {
        console.log('no hizo nada')
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Ops al parecer las crenciales no incorrectas');
  }


}
