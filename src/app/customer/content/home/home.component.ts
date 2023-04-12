import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart } from 'src/app/class/cart';
import { Product } from 'src/app/class/product';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCategory: any = []
  listProducts: Array<Product> = []
  listRecently: any
  listNew: any = []
  listOrder: any = []
  listRating: any = []
  listDiscount: any = []
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(data => {
      this.listCategory = data
    })
    this.service.getAll().subscribe(data => {
      this.listProducts = data
      // console.log(data);
      this.listRecently = this.listProducts.filter((data: any) => {
        return (data.sale) == true
      })
      this.listNew = this.listProducts.filter((data: any) => {
        return (data.new) == true
      }
      )
      // test category
      // this.listProducts.forEach((data: any) => {
      //   data.category_id.forEach((id: any) => {
      //     if (id == 1) {
      //       console.log(data)
      //     }
      //   })
      // });
    })
    this.service.getOrder().subscribe(data => {
      this.listOrder = data
    })
    this.service.getRating().subscribe(data => {
      this.listRating = data
    })
    this.service.getDiscount().subscribe(data => {
      this.listDiscount = data
    })






  }

  addStyle(e: any) {
    let top = document.querySelectorAll('#top')
    let id: any = e.target.dataset.id
    if (id) {
      top.forEach(item => {
        item.classList.remove('top')
        e.target.classList.add('top')
      })
    }
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
        console.log(productCart.product_id);

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

  showTop(temp: string) {
    // alert(temp)\

    const order = document.getElementById("showOrder")
    const rating = document.getElementById("showRating")
    const discount = document.getElementById("showDiscount")
    if (temp == 'order') {
      rating?.classList.remove('showPro')
      discount?.classList.remove('showPro')
      order?.classList.add('showPro')
    } else if (temp == 'rating') {
      discount?.classList.remove('showPro')
      order?.classList.remove('showPro')
      rating?.classList.add('showPro')
    } else {
      order?.classList.remove('showPro')
      rating?.classList.remove('showPro')
      discount?.classList.add('showPro')
    }
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left toLeft test"></i>', '<i class="fa-solid fa-arrow-right toRight"></i>'],
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      768: {
        items: 3,
      },
      808: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
  collected: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left toLeft"></i>', '<i class="fa-solid fa-arrow-right toRight"></i>'],
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      768: {
        items: 2,
      },
      808: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

}
