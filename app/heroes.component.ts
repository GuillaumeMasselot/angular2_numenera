import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/style.css'],
    templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {

    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
