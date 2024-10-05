import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit ,AfterViewInit{
  
  
  title = 'Wellcome to Hotel 1000Sunny';

  @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;
  @ViewChild('name',{static:true})name!:ElementRef;

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title=this.title;
    this.name.nativeElement.innerText="vit";
  }

  ngAfterViewInit(): void {
    //console.log(this.headerComponent);
    
  }
}
