import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  credentials={
    email:'',
    password:'',
  }
  constructor(){}
ngOnInit(): void {

    
}

}

