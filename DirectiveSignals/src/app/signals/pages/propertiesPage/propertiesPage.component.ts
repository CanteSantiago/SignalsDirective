import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertiesPage',
  templateUrl: './propertiesPage.component.html',
  styleUrls: ['./propertiesPage.component.css']
})
export class PropertiesPageComponent implements OnInit {

  onFieldUpdated(field: string,value:string){
    console.log({field,value})
  }

  ngOnInit() {
  }

}
