import { Component, Input, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent 
{
  @Input() info:any=[];
  @Input() info_head:any=[];
  ngOnInit() {
    console.log(this.info);
  }
  // ondelete()
  // // {
  // //     const ind = this.info.indexOf();
  // //     this.info.splice(ind, 1);
  // // }
  // flag:boolean = true;
  onedit(x:any)
  {
    const ind = this.info.indexOf(x);
    x.key = !x.key ;
    x.key2=!x.key2;
  }
  ondelete(x:any)
  {
    const ind = this.info.indexOf(x);
    this.info.splice(ind, 1);
    x.key = !x.key ;
    x.key2=!x.key2;
  }
  oncancel(x:any)
  {
    x.key = !x.key ;
    x.key2=!x.key2;
  }
  @ViewChild("newname") newname:any
  onsave(x:any)
  {
   console.log(this.newname.nativeElement.value, x.FullNmae);
   x.FullNmae = this.newname.nativeElement.value;
   x.key = !x.key ;
   x.key2=!x.key2;
  }
    @ViewChildren('ts')
    ts1!: QueryList<any>;
  
  oncheck(x:any)
  {
    this.ts1.forEach(item => {
      item.nativeElement.checked = x.target.checked;
    });
  }
  @ViewChild('master') master:any;
  oncheckb(x:any)
  {
    console.log(x.target.checked);
    if(x.target.checked)
      {
    this.master.nativeElement.checked = true;
    this.ts1.forEach(item => { 
       if(item.nativeElement.checked==false)
        {
          this.master.nativeElement.checked = false;
        }
     });
     }
    else
     {
        this.master.nativeElement.checked = false;
     }
  }
  onasc(x:any)
  {
    if (x.target.value=="asc")
      {
    this.info.sort((a:any,b:any)=>a.mobile-b.mobile);
      }
    if(x.target.value=="des")
      {
    this.info.sort((a:any,b:any)=>b.mobile-a.mobile);
      }
  }
  ondes()
  {
    this.info.sort((a:any,b:any)=>b.mobile-a.mobile);
  }
}
