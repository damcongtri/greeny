import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Repeat: string = ''
  avatar: any
  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('')
  })
  constructor(private service: DataService, private router: Router) { }
  changeImg(e: any) {
    const render = new FileReader()
    const file = e.target.files
    render.readAsDataURL(file[0])
    render.onload = () => {
      this.avatar = render.result as string
      this.formData.value.image = this.avatar
    }
  }
  ngOnInit(): void {
  }
  submit() {
    if (this.formData.valid && this.Repeat == this.formData.value.password) {
      this.service.findUserRegister(this.formData.value).subscribe(data => {
        if (data[0]) {
          alert('Email already exists')
        } else {
          this.service.postUser(this.formData.value).subscribe(data => {
            alert('Done')
            this.router.navigate(['form'])
          })
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
