import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.formData.valid) {

      this.service.findUser(this.formData.value).subscribe((data: any) => {
        if (data[0]) {
          localStorage.removeItem('user')
          localStorage.removeItem('admin')
          alert('Logged in successfully')
          let user: any = {
            id: data[0].id,
            name: data[0].name,
            image: data[0].image,
          }
          localStorage.setItem("user", JSON.stringify(user))
          if (data[0].role === 'admin') {
            localStorage.setItem("admin", JSON.stringify(user))
          }
          this.router.navigate([''])
        } else {
          alert('Wrong information bro!')
        }
      })
    }

  }
  check1: boolean = true
  check2: boolean = true
  password(key: any) {
    const pass = document.getElementById('pass')
    const repeat = document.getElementById('repeat')
    const p1 = document.getElementById('password1')
    const p2 = document.getElementById('password2')
    if (key == 'pass') {
      if (this.check1) {
        this.check1 = false
        pass?.setAttribute('type', "text")
        p1?.setAttribute('class', "fa-solid fa-eye-slash")
      } else {
        this.check1 = true
        pass?.setAttribute('type', "password")
        p1?.setAttribute('class', "fa-solid fa-eye")
      }
    } else {
      if (this.check2) {

        this.check2 = false
        repeat?.setAttribute('type', "text")
        p2?.setAttribute('class', "fa-solid fa-eye-slash")
      } else {
        this.check2 = true
        repeat?.setAttribute('type', "password")
        p2?.setAttribute('class', "fa-solid fa-eye")
      }
    }
  }
  get f(): any {
    return this.formData.controls
  }

}
