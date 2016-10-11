import { WORLD, HERO_ACTIONS } from '../config';
import Hero from '../display/Hero';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createHero();
    this.bindEvents();
  }
  bindEvents() {
    this.handleKeyDown = (e) => {
      const heroAction = HERO_ACTIONS[e.keyCode];
      if (heroAction) {
        this.heroActions[heroAction] = true;
      }
    };
    this.handleKeyUp = (e) => {
      const heroAction = HERO_ACTIONS[e.keyCode];
      if (heroAction) {
        this.heroActions[heroAction] = false;
      }
    };
    this.handleMouseMove = (e) => {
      const x = e.clientX - (this.stage.canvas.offsetLeft + this.hero.x);
      const y = e.clientY - this.hero.y;
      const rot = Math.atan2(y, x) * 180 / Math.PI;

      this.hero.rotateTower(rot);
    };
    this.handleMouseDown = () => {
      this.heroActions.fire = true;
    };
    this.handleMouseUp = () => {
      this.heroActions.fire = false;
    };

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }
  createHero() {
    this.hero = new Hero();
    this.hero.x = WORLD.WIDTH / 2;
    this.hero.y = WORLD.HEIGHT / 2;
    this.heroActions = {
      left: false,
      top: false,
      right: false,
      down: false,
      fire: false,
    };
    this.addChild(this.hero);
  }
  destroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
  tick() {
    this.hero.setActions(this.heroActions);
    this.hero.move();
  }
}
