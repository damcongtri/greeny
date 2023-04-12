import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Cart } from 'src/app/class/cart';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: any
  listSearch: any = []
  list: any;
  test: boolean = true;
  checkUser: boolean = false
  user: any
  length: any = [];
  total: number = 0
  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.checkuser()
    this.service.getCategory().subscribe(data => {
      this.list = data
    })
    // this.service.getCart().subscribe(data => {
    //   this.length = data
    //   let total: any = []
    //   total = data
    //   total.forEach((price: Cart) => {
    //     this.total += Number(price.price) * Number(price.quantily)
    //   })
    // })
    this.service.lengthCart.subscribe((data: any) => {
      console.log(data);
      this.length = data
    })
    this.service.totalCart.subscribe((data: any) => {
      console.log(data);
      this.total = data
    })
    this.service.getAll().subscribe((data:any) => {
      this.listSearch = data
    })

    window.onscroll = function () {
      function myFunction(): void {
        alert('hahah')
        if (document.body.scrollTop > 130) {
          document.getElementById('sticky')?.classList.add('sticky')
        } else {
          document.getElementById('sticky')?.classList.remove('sticky')
        }
      }
    };
    // this.service.
  }
  showSearch() {
    if (this.test) {
      document.getElementById('search')?.setAttribute('class', 'header-main-mid col-lg-12 col-md-12 col-sm-12 d-block')
      this.test = false
      document.getElementById('icon-search')?.setAttribute('class', 'fa-solid fa-xmark')

    } else {
      document.getElementById('icon-search')?.setAttribute('class', 'fa-solid fa-magnifying-glass')
      document.getElementById('search')?.setAttribute('class', 'header-main-mid col-lg-12 col-md-12 col-sm-12 d-none')
      this.test = true
    }
  }
  checkuser() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    if (this.user != null) {
      this.checkUser = true
    }
  }
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
    this.checkuser()
    alert('Logout sussesful')
  }
  lengthNumber() {
    alert('ok')
    this.service.getCart().subscribe(data => {
      this.length = data
    })
  }
  cart() {
    let user: any = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    if (user != null) {
      this.router.navigate(['/cart'])
    } else {
      if (confirm('You need login !')) {
        this.router.navigate(['/form'])
      }
    }
  }
  clickSearch(id: number) {

    this.keyword = ''
    this.router.navigate([`detail/${id}`])
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    if (($event.target.scrollingElement.scrollTop) > 130) {
      document.getElementById('sticky')?.classList.add('sticky')
      document.getElementById('search-sticky')?.classList.add('search-sticky')
    } else {
      document.getElementById('sticky')?.classList.remove('sticky')
      document.getElementById('search-sticky')?.classList.remove('search-sticky')
    }

  }

}
