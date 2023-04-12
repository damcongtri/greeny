import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  checkImg: boolean = false
  imageMain: string = ''
  formData = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
  })
  constructor(private service: DataService, private actRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id']
    this.service.getCategoryItem(id).subscribe(data => {
      this.formData.patchValue(data)
      this.imageMain = this.formData.value.image
    })
  }
  submitForm() {
    if (!this.formData.value.image) {
      this.checkImg = true
    } else {
      this.service.postCategory(this.formData.value).subscribe(() => {
        alert('Done')
      })
      this.router.navigate(['admin/category'])
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
