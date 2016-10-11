import { WORLD } from '../config';
import Hero from '../display/Hero';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.hero = new Hero();
    this.hero.x = WORLD.WIDTH / 2;
    this.hero.y = WORLD.HEIGHT / 2;

    this.addChild(this.hero);
  }
}
