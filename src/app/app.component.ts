import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit ,AfterViewInit{
  
  
  title = 'Wellcome to Hotel 1000Sunny';

  @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;

  ngOnInit(): void {
    console.log(this.headerComponent);
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title=this.title;

    
  }
}
