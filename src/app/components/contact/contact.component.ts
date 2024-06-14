import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {
  info = [
{'sno':1,'FullNmae':'Uday','email':'123@gmail.cim','mobile':1222233,'admin':0},
{'sno':2,'FullNmae':'Uy','email':'123@gmail.cim','mobile':1222233,'admin':0},
{'sno':3,'FullNmae':'Uay','email':'143@gmail.cim','mobile':1222233,'admin':0},
{'sno':4,'FullNmae':'day','email':'1243@gmail.cim','mobile':1222233,'admin':0},
{'sno':5,'FullNmae':'ay','email':'1423@gmail.cim','mobile':1222233,'admin':0}
];
info_head = [['Sno','FullNmae','E-mail','Mobile','Admin']];}
