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

  // on Enter button  to add to todo list
  enter(event:any){

    // Keycode for enter key is 13 so if code is 13 we add the list

    if (event.keyCode==13){
      if(this.ip.length!=1){
    
        this.result.push(this.ip);
         this.ip=' ';
        
       }
       else{alert("empty");}

    }

   }

  //  on button click to add to todo list
  add() 
   {
     if(this.ip.length!=1){
    
    this.result.push(this.ip);
     this.ip=' ';
   }
   else{alert("empty");}
  }
  // To remove the tdoo
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

  //  Form Validation
   ngOnInit(){
    this.signupForm=new FormGroup({
      'username':new FormControl(null,Validators.required),'email': new FormControl(null,[Validators.required,Validators.email])
    });
   }

  //  Form submit function
   onsubmit(){
     console.log(this.signupForm);
     if(this.signupForm.valid==true){alert("Form Submitted");}
   }

   

  



}
