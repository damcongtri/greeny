import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
