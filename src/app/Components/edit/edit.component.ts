import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/conexion.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editForm: any;
  editId: any;
  constructor(private formBuilder: FormBuilder, private con: ConexionService, private router: Router, private route: ActivatedRoute) {
    this.editForm = this.formBuilder.group({
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.editId = params['id'];
    });
    this.con.Get(this.editId).subscribe((data: any) => {
      this.PatchValue(data)
    });
  }
  PatchValue(data: any) {
    this.editForm.patchValue({
      Name: data.name,
      Username: data.username,
      Email: data.email,
      Street: data.address.street,
      Suite: data.address.suite,
      City: data.address.city,
      Zipcode: data.address.zipcode,
      Lat: data.address.geo.lat,
      Lng: data.address.geo.lng,
      Phone: data.phone,
      Website: data.website,
      CompanyName: data.company.name,
      CompanyCatchPhrase: data.company.catchPhrase,
      CompanyBs: data.company.bs
    });
  }
  Edit() {
    let datos = {
      name: this.editForm.value.Name,
      username: this.editForm.value.Username,
      email: this.editForm.value.Email,
      address: {
        street: this.editForm.value.Street,
        suite: this.editForm.value.Suite,
        city: this.editForm.value.City,
        zipcode: this.editForm.value.Zipcode,
        geo: {
          lat: this.editForm.value.Lat,
          lng: this.editForm.value.Lng
        }
      },
      phone: this.editForm.value.Phone,
      website: this.editForm.value.Website,
      company: {
        name: this.editForm.value.CompanyName,
        catchPhrase: this.editForm.value.CompanyCatchPhrase,
        bs: this.editForm.value.CompanyBs
      }
    };
    this.con.Update(this.editId, datos).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['Main'])
    });
  }
}
