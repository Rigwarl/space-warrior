import assetsManager from '../managers/assetsManager';
import { TILE, HERO_PROPS } from '../config';

export default class Hero extends createjs.Container {
  constructor() {
    super();

    this.createPlatform();
    this.createTower();
    this.setProps();
    this.rotation = -90;
  }
  createTower() {
    this.tower = new createjs.Bitmap(assetsManager.getResult('tank-tower-gray'));
    this.tower.regX = TILE.WIDTH / 2 - 10;
    this.tower.regY = TILE.HEIGHT / 2;
    this.addChild(this.tower);
  }
  createPlatform() {
    this.platform = new createjs.Bitmap(assetsManager.getResult('tank-platform-gray'));
    this.platform.regX = this.platform.regY = TILE.HEIGHT / 2;
    this.addChild(this.platform);
  }
  setProps() {
    this.v = 0;
    this.vRot = 0;
  }
  rotateTower(rot) {
    this.tower.rotation = 90 + rot;
  }
  handleActions(actions) {
    if (actions.left) {
      this.vRot -= HERO_PROPS.A_ROT;
    } else if (actions.right) {
      this.vRot += HERO_PROPS.A_ROT;
    }
    this.vRot *= (1 - HERO_PROPS.T_ROT);

    if (actions.top) {
      this.v -= HERO_PROPS.A;
    } else if (actions.down) {
      this.v += HERO_PROPS.A;
    }
    this.v *= (1 - HERO_PROPS.T);
  }
  move() {
    this.y += this.v * Math.cos(this.platform.rotation * Math.PI / 180);
    this.x += this.v * Math.sin(-this.platform.rotation * Math.PI / 180);
    this.platform.rotation += this.vRot;
  }
}
