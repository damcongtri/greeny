import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class User {
    id?: number;
    name?: string;
    email?: string
    password?: string
    image?: string
    address?: string;
    phone?: string
}
