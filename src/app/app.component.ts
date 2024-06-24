import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  constructor(private list: DataService){}
  flag: boolean = true;
  ngOnInit():void {
    this.flag = this.list.flag;
  }
}
