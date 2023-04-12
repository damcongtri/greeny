import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../class/cart';
import { Product } from '../class/product';
import { User } from '../class/user';

const urlAPI = 'https://jsonserver-black.vercel.app'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  check: boolean = false
  totalCart = new Subject<number>()
  lengthCart = new Subject<number>()
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    this.getCart().subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<Product[]>(`${urlAPI}/product`)
  }
  getAllPage(number: number): Observable<Product[]> {
    this.getCart().subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<Product[]>(`${urlAPI}/product?_page=${number}&_limit=16`)
  }
  getItem(id: number): Observable<Product> {
    return this.http.get<Product>(`${urlAPI}/product/${id}`)
  }
  getCategory(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/category`)
  }
  getCategoryItem(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${urlAPI}/category/${id}`)
  }
  getOrder(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/top-order`)
  }
  getRating(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/top-rating`)
  }
  getDiscount(): Observable<Product[]> {
    return this.http.get<Product[]>(`${urlAPI}/top-discount`)
  }
  postProduct(data: Product): Observable<any> {
    return this.http.post(`${urlAPI}/product`, data)
  }
  deleteProduct(id: number) {
    return this.http.delete(`${urlAPI}/product/${id}`)
  }
  putProduct(data: Product): Observable<any> {
    return this.http.put(`${urlAPI}/product/${data.id}`, data)
  }
  postCategory(data: any): Observable<any> {
    return this.http.post(`${urlAPI}/category`, data)
  }
  deleteCategory(id: number) {
    return this.http.delete(`${urlAPI}/category/${id}`)
  }
  findUser(data: any): Observable<any> {
    return this.http.get<any>(`${urlAPI}/user?email=${data.email}&password=${data.password}`)
  }
  findUserRegister(data: any): Observable<any> {
    return this.http.get<any>(`${urlAPI}/user?email=${data.email}`)
  }
  postUser(data: any): Observable<any> {
    return this.http.post(`${urlAPI}/user`, data)
  }
  addCart(data: Cart): Observable<any> {
    this.getCart().subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.post(`${urlAPI}/cart`, data)
  }
  getCart(): Observable<Cart[]> {
    let user: any = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : []
    this.http.get<Cart[]>(`${urlAPI}/cart?user_id=${user.id}`).subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.http.get<Cart[]>(`${urlAPI}/cart?user_id=${user.id}`).subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<Cart[]>(`${urlAPI}/cart?user_id=${user.id}`)
  }
  DeleteCart(id: any): Observable<any> {
    this.getCart().subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.delete(`${urlAPI}/cart/${id}`)
  }

  putCart(data: any): Observable<any> {
    this.getCart().subscribe(data => {
      let total: number = 0
      let dataCHeck: any = []
      dataCHeck = data
      dataCHeck.forEach((price: Cart) => {
        total += Number(price.sale_price) * Number(price.quantily)
        this.totalCart.next(total)
      })
      if (dataCHeck.length == 0) {
        this.totalCart.next(0)
      }
    })
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.put(`${urlAPI}/cart/${data.id}`, data)
  }


  findCart(product_id: any): Observable<any> {
    return this.http.get(`${urlAPI}/cart?product_id=${product_id}`)
  }
  getAcc(): any {
    let account = JSON.parse(localStorage.getItem('user') as string)
    this.http.get(`${urlAPI}/user/${account.id}`).subscribe((data: any) => {
      console.log(data);

      if (data.role == 'admin') {
        alert('ok')
        return true
      } else {
        return false
      }
    })
  }
}
