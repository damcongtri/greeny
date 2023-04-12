import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/class/cart';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list: any = []
  quantily: any;
  total: number = 0
  ship: number = 10
  voucher: string = ''
  check = false
  idCheck: number = 1
  idPhone: number = 1
  idAR: number = 1
  constructor(private service: DataService) { }
  // formNumber = formg
  ngOnInit(): void {
    console.log(this.idCheck);
    this.getProductCart()
  }
  getProductCart() {
    this.service.getCart().subscribe(data => {
      this.list = data
      this.total = 0
      this.list.forEach((item: any) => {
        this.total += (item.sale_price * item.quantily)
      })
      if (this.total == 0) {
        this.ship = 0
      }
    })
  }
  // setCheck(event: any): void {
  //   let item = event.target.id;
  //   document.getElementById(item)?.classList.add('active')
  // }
  mark(mark: any, id: any) {

    let quantily: any = document.getElementById(`quantily${id}`)
    alert(quantily.value)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        let data: any = this.list.find((data: any) => {
          return data.id == id
        })
        data.quantily = quantily.value


        this.service.putCart(data).subscribe(() => {

        })

        this.getProductCart()
      }
    } else {
      quantily.value = Number(quantily.value) + 1
      let data = this.list.find((data: any) => {
        return data.id == id
      })
      data.quantily = quantily.value
      this.service.putCart(data).subscribe(() => {

      })

      this.getProductCart()
    }
  }

  markPc(mark: any, id: any) {
    let quantily: any = document.getElementById(`quantilyPc${id}`)
    console.log(quantily);

    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        // this.list.quantily = quantily.value
        let data: any = this.list.find((data: any) => {
          return data.id == id
        })
        data.quantily = quantily.value
        this.service.putCart(data).subscribe(() => {
        })
        this.getProductCart()
      }
    }
    else {
      quantily.value = Number(quantily.value) + 1
      // this.list.quantily = quantily.value
      let data = this.list.find((data: any) => {
        return data.id == id
      })
      data.quantily = quantily.value
      this.service.putCart(data).subscribe(() => { })

      this.getProductCart()
    }

  }
  deleteProduct(id: any) {

    this.service.DeleteCart(id).subscribe(() => {
      this.service.getCart().subscribe(data => {
        this.list = data
        this.getProductCart()
      })
    })



  }
  Checkvoucher(): any {
    let voucher: string = this.voucher
    if (voucher.toLowerCase() == 'freeship') {
      this.ship = 0
      return true
    } else {
      alert('Voucher Error')
      this.ship = 10
    }

  }
  checkIp: boolean = false
  allCheck() {
    let checkbox: any
    if (this.checkIp == false) {
      this.list.forEach((item: any) => {
        checkbox = document.getElementById(`item-ip${item.id}`)
        checkbox.checked = true
      })
      this.checkIp = true
    } else {
      this.list.forEach((item: any) => {
        checkbox = document.getElementById(`item-ip${item.id}`)
        checkbox.checked = false
      })
      this.checkIp = false
    }
  }
  removeAll() {
    let check: boolean = false
    let checkbox: any
    if (confirm('Are You Delete')) {
      this.service.getCart().subscribe((data: any) => {
        data.forEach((item: any) => {
          checkbox = document.getElementById(`item-ip${item.id}`)
          alert('loading...')
          check = true
          if (checkbox.checked == true) {
            this.deleteProduct(item.id)
          }
        })
        if (!check) {
          Swal.fire({
            icon: 'error',
            title: 'Oh! No',
            text: 'There are no products to remove',
          })
        }
      })
    }
  }
  // loading() {
  //   let timerInterval: any
  //   Swal.fire({
  //     title: 'Auto close alert!',
  //     html: 'I will close in <b></b> milliseconds.',
  //     timer: 2000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading()
  //       const b: any = Swal.getHtmlContainer()?.querySelector('b')
  //       timerInterval = setInterval(() => {
  //         b.textContent = Swal.getTimerLeft()
  //       }, 100)
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval)
  //     }
  //   }).then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log('I was closed by the timer')
  //     }
  //   })
  // }
  checkOut() {
    let check: boolean = false
    let checkbox: any
    if (confirm('Do you confirm order?')) {
      this.service.getCart().subscribe((data: any) => {
        data.forEach((item: any) => {
          checkbox = document.getElementById(`item-ip${item.id}`)
          if (checkbox.checked == true) {
            alert('loading...')
            check = true
            this.deleteProduct(item.id)
          }
        })
        if (check) {
          Swal.fire({
            title: '<3',
            text: 'Thank you! We have recieved your order.',
            imageUrl: 'https://cdn.dribbble.com/users/253769/screenshots/3765285/deliver-blank800_still_2x.gif?compress=1&resize=400x300',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oh! No',
            text: 'There are no products to buy',
          })
        }

      })

    }
  }

}

