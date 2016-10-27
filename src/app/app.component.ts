import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }
  title = 'tour of heroes';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }


}
