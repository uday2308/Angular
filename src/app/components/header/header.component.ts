import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private list: DataService) { }
  
  flag: boolean = true;
  @Input() isLoggedIn: boolean = true;
  
  ngOnInit(): void {
    //this.flag = this.list.flag;
    this.flag = this.isLoggedIn;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onlogout()
  {
      this.list.flag = !this.list.flag;
  }

}
