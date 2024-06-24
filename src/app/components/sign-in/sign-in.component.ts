import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
registerdata:any={
  firstname:"",
  lastname:"",
  password:"",
  email:""
}
constructor(private list: DataService,private r:Router)
{}

flag = true;
onlogin()
{
  this.flag = !this.flag;
}
onsignin()
{
  const ld = localStorage.getItem("angular16local")
  if(ld!=null)
    {
       const a1 = JSON.parse(ld);
       a1.push(this.registerdata);
       localStorage.setItem("angular16local",JSON.stringify(a1));
       
    }
    else
    {
         const a1=[];
         a1.push(this.registerdata);
         localStorage.setItem("angular16local",JSON.stringify(a1));
    }
    this.list.flag = !this.list.flag;
    alert("registration successfull");
    

  }
login(x:any)
{
  const ld = localStorage.getItem("angular16local")
  if(ld!=null)
    {
       const a1 = JSON.parse(ld);
       var f = 0;
       for(let i=0;i<a1.length;i++)
       {
         if(a1[i].email==this.registerdata.email && a1[i].password==this.registerdata.password)
         {
           this.r.navigateByUrl('/home');
           f=1;
           this.list.flag = !this.list.flag;
           break;
         }
       }
       if(!f)
        {
       alert("E-mail or password mismath");
        }
    }
    else
    {
         alert("No User found");
    }

}
}
