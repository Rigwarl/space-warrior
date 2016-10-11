import { TILE, HERO_PROPS } from '../config';
import assetsManager from '../managers/assetsManager';
import Bullet from './Bullet';

export default class Hero extends createjs.Container {
  constructor() {
    super();

    this.createPlatform();
    this.createTower();
    this.setProps();
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
    this.firing = false;
    this.weaponCd = 0;

    this.rotation = -90;
  }
  rotateTower(rot) {
    this.tower.rotation = 90 + rot;
  }
  fire() {
    this.weaponCd = HERO_PROPS.WEAPON_CD;

    const bullet = new Bullet(this.tower.rotation);
    bullet.x = this.x + TILE.WIDTH * 0.7 * Math.sin(this.tower.rotation * Math.PI / 180);
    bullet.y = this.y - TILE.HEIGHT * 0.7 * Math.cos(-this.tower.rotation * Math.PI / 180);

    this.parent.addChild(bullet);
  }
  setActions(actions) {
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

    this.firing = actions.fire;
  }
  move() {
    this.y += this.v * Math.cos(this.platform.rotation * Math.PI / 180);
    this.x += this.v * Math.sin(-this.platform.rotation * Math.PI / 180);
    this.platform.rotation += this.vRot;

    if (this.weaponCd) {
      this.weaponCd -= 1;
    } else if (this.firing) {
      this.fire();
    }
  }
}
