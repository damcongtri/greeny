import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/class/cart';
import { Product } from 'src/app/class/product';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  data: any
  checkPage: number = 1
  list: any
  listCategory: any
  NumberPage: number = 1;
  listpage: any = []
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      for (let index = 0; index < (data.length / 16); index++) {
        this.listpage.push(index + 1)
        console.log(this.listpage);
      }
    })
    this.getPage()
    this.service.getCategory().subscribe(data => {
      this.listCategory = data
    })

  }
  getPage() {
    this.service.getAllPage(this.NumberPage).subscribe(data => {
      this.data = data
      this.list = data
    })
  }
  changePage(number: any) {
    window.scroll({
      top: 300,
      left: 0,
      behavior: 'smooth'
    })
    this.checkPage = number
    this.NumberPage = number
    this.getPage()
  }
  clearPrice() {
    let min: any = document.getElementById('min')
    let max: any = document.getElementById('max')
    if (min.value && max.value) {
      min.value = ''
      max.value = ''
      this.list = this.filter()
      console.log(this.filter());
    }
  }
  filterPrice(data: any) {
    let filter: any = data
    let min: any = document.getElementById('min')
    let max: any = document.getElementById('max')
    if (min.value > 0) {
      filter = filter.filter((item: any) => {
        return (item.sale_price >= Number(min.value))
      })
    }
    if (max.value > 0) {
      filter = filter.filter((item: any) => {
        return item.sale_price <= Number(max.value)
      })
    }
    return filter
  }
  clearTag() {
    let tagNew: any = document.getElementById('new')
    let sale: any = document.getElementById('sale')
    let feature: any = document.getElementById('feature')
    tagNew.checked = false
    sale.checked = false
    feature.checked = false
    this.filter()
  }
  searchTag(data: any) {
    let tagNew: any = document.getElementById('new') as HTMLElement
    let sale: any = document.getElementById('sale') as HTMLElement
    let feature: any = document.getElementById('feature') as HTMLElement
    if (tagNew.checked == false && sale.checked == false && feature.checked == false) {
      return data
    } else {
      data = data.filter((item: Product) => {
        return (item.new == tagNew.checked && item.sale == sale.checked && item.feature == feature.checked)
      })
    }
    return data
  }
  clearCategoris() {
    let category_id: any = []
    this.listCategory.forEach((item: any) => {
      let id: any = document.getElementById(`category${item.id}`) as HTMLElement
      id.checked = false
    })
    this.filter()
  }
  category() {

  }
  searchCategoris(data: any) {
    let category_id: any = []
    this.listCategory.forEach((item: any) => {
      let id: any = document.getElementById(`category${item.id}`) as HTMLElement
      if (id.checked == true) {
        category_id.push(Number(item.id))
      }
    })
    console.log(category_id);
    if (category_id[0]) {
      category_id.forEach((itemId: any) => {
        data = data.filter((d: any) => d.category_id.includes(itemId));
      })
    }

    return data
  }
  filter() {
    window.scroll({
      top: 300,
      left: 0,
      behavior: 'smooth'
    })
    let result: any = this.filterPrice(this.data)
    result = this.searchTag(result)
    result = this.searchCategoris(result)
    this.list = result
  }
  addCart(id: any) {
    let user = JSON.parse(localStorage.getItem('user') as string)
    if (user) {
      let quantily: any = document.getElementById('quantily')
      // let id: any = this.route.snapshot.params['id']
      let productCart = new Cart
      this.service.getItem(id).subscribe(data => {
        productCart.product_id = data.id as number
        productCart.name = data.name
        productCart.price = data.sale_price
        productCart.sale_price = data.sale_price
        productCart.image = data.image
        productCart.user_id = user.id

        this.service.findCart(productCart.product_id).subscribe((data: any) => {
          if (data[0]) {
            productCart.id = data[0].id
            productCart.quantily = 1 + Number(data[0].quantily)
            this.service.putCart(productCart).subscribe(data => {
              console.log(data);
            })
          } else {
            productCart.quantily = 1
            this.service.addCart(productCart).subscribe(data => {
              console.log(data);
            })
          }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Done !',
          showConfirmButton: false,
          timer: 500
        })
      })
    } else {
      if (confirm('You need login !')) {
        this.router.navigate(['/form'])
      }
    }

  }
}
