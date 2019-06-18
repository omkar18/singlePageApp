import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object;
  constructor(private Data: DataService) { }

  ngOnInit() {
    this.Data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }



}
