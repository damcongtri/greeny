import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  checkImg: boolean = false
  imageMain: string = ''
  image_child: Array<string> = []
  listCategory: any
  data = new Product()
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    id: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    image_child: new FormControl([]),
    category_id: new FormControl([]),
    new: new FormControl(false),
    sale: new FormControl(false),
    feature: new FormControl(false)
  })
  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.service.getCategory().subscribe(data => {
      this.listCategory = data
    })

    // phần thêm mới của edit
    let id_edit = this.route.snapshot.params['id']
    this.service.getItem(id_edit).subscribe(data => {
      this.formData.patchValue(data)
      console.log(this.formData.value.image);
      this.imageMain = this.formData.value.image
      this.image_child = this.formData.value.image_child
      this.formData.value.category_id.forEach((id: any) => {
        let data: any = document.getElementById(id)
        data.checked = true
      })
    })
  }
  submitForm() {
    if (!this.formData.value.image) {
      this.checkImg = true
    } else {
      this.data.id = this.formData.value.id
      this.data.name = this.formData.value.name
      this.data.feature = this.formData.value.feature
      this.data.price = this.formData.value.price
      this.data.sale = this.formData.value.sale
      this.data.sale_price = this.formData.value.sale_price
      this.data.new = this.formData.value.new
      this.data.image_child = this.formData.value.image_child
      this.data.category_id = this.formData.value.category_id
      this.data.image = this.formData.value.image
      this.service.putProduct(this.data,).subscribe(() => {
        console.log(this.data);

      })
      alert('Done')
      this.router.navigate(['/admin/products'])
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
  AddImgChild(e: any) {
    let file = e.target.files
    console.log(e);
    if (file[0]) {
      let render = new FileReader()
      render.readAsDataURL(file[0])
      render.onload = () => {
        this.formData.value.image_child.push(render.result as string)
        this.formData.value.image_child = this.image_child
        // console.log(this.image_child)
      }
    }
  }
  changeImgChild(id: number) {
    // console.log('aa');

    // console.log(id);
    // console.log(id);

    let test = document.getElementById("change-image-child-" + id)
    if (id >= 0) {
      console.log(id);

      test?.click()
      test?.addEventListener('change', (e: any) => {
        console.log(id);

        let file = e.target.files
        if (file[0]) {
          let render = new FileReader()
          render.readAsDataURL(file[0])
          render.onload = () => {
            // console.log(this.formData.value.image_child);
            this.formData.value.image_child[id] = render.result as string;
            // console.log(this.formData.value.image_child);
            this.image_child[id] = this.formData.value.image_child[id]
          }
        }
      })
    }
  }
  removeChild(i: any) {
    if (confirm('Are you remove ?')) {
      this.image_child.splice(i, 1)
    }
  }
  changeCategory(id: any) {
    let data: any = document.getElementById(id)
    // console.log(data.checked);
    if (data.checked) {

      this.formData.value.category_id.push(id)
    } else {
      let index = this.formData.value.category_id.findIndex((item: any) => {
      })
      this.formData.value.category_id.splice(index, 1)
    }
  }
  get f(): any {
    return this.formData.controls
  }
}
