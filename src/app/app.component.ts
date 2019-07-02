import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', value: 12},
      {field: 'gender', operator: '>=', value: 'm'},
      {field: 'name', operator: '%', value: 'adam'}
    ]
  };

  onSubmit() {
    console.log(this.query);
    (<HTMLInputElement>document.getElementById("mystuff")).value = JSON.stringify(this.query, null, 2);
  }

  onRestore() {
    var x = (<HTMLInputElement>document.getElementById("mystuff")).value;
    this.query = JSON.parse(x);
    console.log(x);
  }

  config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string'}
    }
  }
}
