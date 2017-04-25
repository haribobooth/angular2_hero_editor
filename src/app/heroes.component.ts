import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  })

  export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    };

    constructor(private heroService: HeroService, private router: Router) {

    };

    getHeroes(): void {
      this.heroService.getHeroes().then(returnedHeroes => this.heroes = returnedHeroes);
    };

    ngOnInit(): void {
      this.getHeroes();
    };

    goToDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    };

  }
