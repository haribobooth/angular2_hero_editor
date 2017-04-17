import { Component } from '@angular/core';
import { Hero } from './Hero'

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <h2>{{hero.name}}</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
})

export class AppComponent  {
  name = 'Hero Editor';
  hero: Hero = {
    name: "Caped Baldy",
    id: 1
  }
}
