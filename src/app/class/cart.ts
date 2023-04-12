import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Cart {
    id?: number
    product_id?: number
    name?: string
    image?: string
    price?: number
    sale_price?: number
    user_id?: number
    quantily?: number
}
