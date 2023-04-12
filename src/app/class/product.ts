import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Product {
    id?: number
    name?: string
    image?: string
    price?: number
    sale_price?: number
    category_id?: Array<number>
    sale?: boolean
    feature?: boolean
    new?: boolean
    image_child?: Array<string>
}
