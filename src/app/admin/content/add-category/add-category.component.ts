import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/class/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  checkImg: boolean = false
  imageMain: string = ''
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
  })
  constructor(private service: DataService) { }
  ngOnInit(): void {

  }
  submitForm() {
    if (!this.formData.value.image) {
      this.checkImg = true
    } else {
      this.service.postCategory(this.formData.value).subscribe()
      alert('Done')
    }
  }

  changeImg(e: any) {
    const render = new FileReader()
    const file = e.target.files
    render.readAsDataURL(file[0])
    render.onload = () => {
      this.imageMain = render.result as string
      this.formData.value.image = this.imageMain
      console.log(this.formData.value.image);
    }

  }
  get f(): any {
    return this.formData.controls
  }
}
