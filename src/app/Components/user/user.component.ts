import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData: any;
  userId: any;
  constructor( private con: ConexionService, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.con.Get(this.userId).subscribe((data: any) => {
      this.userData=data;
    });
  }
  Return(){
    this.router.navigate(['Main']);
  }

}
