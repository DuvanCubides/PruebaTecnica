import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  insertForm:any;
  constructor(private formBuilder: FormBuilder, private con:ConexionService, private router: Router){
    this.insertForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Username: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      Suite: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Zipcode: ['', [Validators.required]],
      Lat: ['', [Validators.required]],
      Lng: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      Website: ['', [Validators.required]],
      CompanyName: ['', [Validators.required]],
      CompanyCatchPhrase: ['', [Validators.required]],
      CompanyBs: ['', [Validators.required]]
    });
  }
  Submit(){
    let datos ={
      name: this.insertForm.value.Name,
      username: this.insertForm.value.Username,
      email: this.insertForm.value.Email,
      address:{
        street: this.insertForm.value.Street,
        suite: this.insertForm.value.Suite,
        city: this.insertForm.value.City,
        zipcode: this.insertForm.value.Zipcode,
        geo:{
          lat: this.insertForm.value.Lat,
          lng: this.insertForm.value.Lng
        }
      },
      phone: this.insertForm.value.Phone,
      website: this.insertForm.value.Website,
      company:{
        name: this.insertForm.value.CompanyName,
        catchPhrase: this.insertForm.value.CompanyCatchPhrase,
        bs: this.insertForm.value.CompanyBs
      }
    };
    this.con.Post(datos).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['Main'])
    });
  }
  Cancel(){
    this.router.navigate(['Main']);
  }
  
}
