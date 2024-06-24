import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent {
count=0;
onclick(x:any)
{
   this.count=this.count+1
}
}
