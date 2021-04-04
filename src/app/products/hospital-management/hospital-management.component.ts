import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-hospital-management',
  templateUrl: './hospital-management.component.html',
  styleUrls: ['./hospital-management.component.scss']
})
export class HospitalManagementComponent implements OnInit {
  // public type:string = "password";
  // public show:boolean = false;
  // public twodivision: any;
  // public scrollTop: any;
  constructor() { }

  ngOnInit(): void {
    // $(window).scroll(function(){
    //   this.twodivision = $("#twodivision").offset().top;
    //   this.scrollTop = $(this).scrollTop();
    //   console.log(this.twodivision);
    //     if(this.twodivision <= this.scrollTop+100){
    //       $("#twodivision .heading h2 span").addClass("addClass");
    //   }
    //   else{
    //       $("#twodivision .heading h2 span").removeClass("addClass");
  
    //   }
    // });
  }
  // showPassword(){
  //   this.show = !this.show;
  //   if(this.show){
  //     this.type = "text";
  //   }else{
  //     this.type = "password";
  //   }
  // }
}
