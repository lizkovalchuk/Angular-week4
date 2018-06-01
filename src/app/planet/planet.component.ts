import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service'

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  title: string = 'Planets';
  year: number = new Date().getFullYear();
  planet: Planet;
  planets: Planet[];

  setPlanet(p: Planet){
    console.log(this.planet);
    this.planet = p;
    console.log(this.planet);
  }

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(ps => this.planets = ps );
  }

}
