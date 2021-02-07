import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public scrollTop: any;
  public serTop: any;
  public productSection: any;
  public about: any;
  public completeTechnology: any;
  public blog: any;
  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function(){
      this.serTop = $("#service").offset().top;
    this.productSection = $("#productSection").offset().top;
    this.about = $("#about").offset().top;
    this.completeTechnology = $("#completeTechnology").offset().top;
    this.blog = $("#blog").offset().top;
      this.scrollTop = $(this).scrollTop();
      
        

      if(this.productSection <= this.scrollTop + 100){
        $("#productSection .heading h2 span").addClass("addClass");
    }
    else{
        $("#productSection .heading h2 span").removeClass("addClass");

    }
    if(this.serTop <= this.scrollTop+100){
        $("#service .heading h2 span").addClass("addClass");
    }
    else{
        $("#service .heading h2 span").removeClass("addClass");

    }
    if(this.about <= this.scrollTop+100){
        $("#about .heading h2 span").addClass("addClass");
    }
    else{
        $("#about .heading h2 span").removeClass("addClass");

    }
    if(this.completeTechnology <= this.scrollTop+100){
        $("#completeTechnology .heading h2 span").addClass("addClass");
    }
    else{
        $("#completeTechnology .heading h2 span").removeClass("addClass");

    }
    if(this.blog <= this.scrollTop+100){
        $("#blog .heading h2 span").addClass("addClass");
    }
    else{
        $("#blog .heading h2 span").removeClass("addClass");

    }
    });
  }

}
