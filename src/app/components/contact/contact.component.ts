import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})


export class ContactComponent implements OnInit {
  info:any = [
{'sno':1,'FullNmae':'Uday','email':'123@gmail.cim','mobile':12,'admin':0,"key":true,"key2":true},
{'sno':2,'FullNmae':'Uy','email':'123@gmail.cim','mobile':23,'admin':0,"key":true,"key2":true},
{'sno':3,'FullNmae':'Uay','email':'143@gmail.cim','mobile':32,'admin':0,"key":true,"key2":true},
{'sno':4,'FullNmae':'day','email':'1243@gmail.cim','mobile':45,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':46,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':42,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':16,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':321,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':722,'admin':0,"key":true,"key2":true},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':4612233,'admin':0,"key":true,"key2":true}
];
info_head = [['Sno','FullNmae','E-mail','Mobile','Admin']];

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