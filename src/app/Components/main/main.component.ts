import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  Users:any;
  constructor(private con:ConexionService, private router:Router) { }

  ngOnInit() {
    this.Get();
  }

  Get(){
    this.con.GetAll().subscribe((data:any)=>{
      this.Users=data;
    });
  }

  Edit(EditId:any){
    this.router.navigate(['/Edit',EditId]);
  }
  Delete(UserId:any){
    this.con.Delete(UserId).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/Main']);
    });
  }
}
