import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm:FormGroup;
  typed=" ";
  title = 'app1';
  ip=" ";
  i1;
  s;
  result=[];
  enter(event:any){
    if (event.keyCode==13){
      if(this.ip.length!=1){
    
        this.result.push(this.ip);
         this.ip=' ';
        
       }
       else{alert("empty");}

    }

   }
  add() 
   {
     if(this.ip.length!=1){
    
    this.result.push(this.ip);
     this.ip=' ';
   }
   else{alert("empty");}
  }
   remove(i1:any)
   {
    this.s=this.result.indexOf(i1);
    this.result.splice(this.s,1);
   }
  
   btn(){
   
    
    if(this.typed.length==1){
    alert("EMPTY");}
    else{alert(this.typed);}
  
   }
   
   ngOnInit(){
    this.signupForm=new FormGroup({
      'username':new FormControl(null,Validators.required),'email': new FormControl(null,[Validators.required,Validators.email])
    });
   }
   onsubmit(){
     console.log(this.signupForm);
     if(this.signupForm.valid==true){alert("Form Submitted");}
   }

   

  



}
