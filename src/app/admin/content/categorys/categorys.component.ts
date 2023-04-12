import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  list: any
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(data => {
      this.list = data
    })
  }
  deleteCategory(id: any) {
    if (confirm('Are you delete ?')) {
      this.service.deleteCategory(id).subscribe(() => {
        this.service.getAll().subscribe(data => {
          this.list = data
        })
      })
    }
  }
}
