import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart } from 'src/app/class/cart';
import { Product } from 'src/app/class/product';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: any;
  listRelated: any
  moreImage: any = [];
  constructor(private service: DataService, private route: ActivatedRoute, private products: Product, private router: Router) {
    this.product = products
  }
  ngOnInit(): void {
    const nav: any = document.querySelector(".details-nav-tabs")
    const tabs = document.querySelectorAll('.tab-btn')
    const contents = document.querySelectorAll('.nav-content')
    nav?.addEventListener("click", (e: any) => {
      let id = e.target.dataset.id
      console.log(e);

      if (id) {
        tabs.forEach((tab) => {
          tab.classList.remove('show-tab');
          e.target.classList.add('show-tab')
        })
        let content: any = document.getElementById(id)
        contents.forEach((content) => {
          content.classList.remove('show-content')
        })
        content.classList.add('show-content')
      }
    })
    let id: any
    this.route.paramMap.subscribe((parms: ParamMap) => {
      id = parms.get('id')
      this.service.getItem(id).subscribe(data => {
        this.product = data
        this.moreImage = data.image_child as object
        // console.log(this.moreImage);
      })
    })

    this.service.getOrder().subscribe(data => {
      this.listRelated = data
    })
  }
  mark(mark: any) {
    let quantily: any = document.getElementById('quantily')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }
  changeimg(i: number) {
    const main = document.getElementById('test-main');
    const test = document.getElementById(`test-item${i}`)
    let img: any = test?.getAttribute('src')
    main?.setAttribute('src', `${img}`)
    // alert(img)           
  }
  changeimgMain() {
    let main = document.getElementById('test-main');
    let test = document.getElementById(`test-item`)
    let img: any = test?.getAttribute('src')
    main?.setAttribute('src', `${img}`)
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
            productCart.quantily = Number(quantily.value) + Number(data[0].quantily)
            this.service.putCart(productCart).subscribe(data => {
            })
          } else {
            productCart.quantily = Number(quantily.value)
            this.service.addCart(productCart).subscribe(data => {
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

  changeDetail(id: any) {
    this.router.navigate([`/detail/${id}`])
    window.scroll({
      top: 350,
      behavior: 'smooth'
    })
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 12,
    navText: ['<i class="fa-solid fa-arrow-left toLeft"></i>', '<i class="fa-solid fa-arrow-right toRight"></i>'],
    responsive: {
      0: {
        items: 4,
      },
      400: {
        items: 4,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

}
