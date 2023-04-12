import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: any;
  keyword: any
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.list = data
    })
  }
  deleteStudent(id: any) {
    if (confirm('Are you delete ?')) {
      this.service.deleteProduct(id).subscribe(() => {
        this.service.getAll().subscribe(data => {
          this.list = data
        })
      })
    }
  }
}
