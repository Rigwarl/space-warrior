import assetsManager from '../managers/assetsManager';
import { TILE } from '../config';

export default class Hero extends createjs.Container {
  constructor() {
    super();

    this.createPlatform();
    this.createTower();
    this.rotation = -90;
  }
  createTower() {
    this.tower = new createjs.Bitmap(assetsManager.getResult('tank-tower-gray'));
    this.tower.x = -6;
    this.tower.regX = TILE.WIDTH / 2 - 14;
    this.tower.regY = TILE.HEIGHT / 2;
    this.addChild(this.tower);
  }
  createPlatform() {
    this.platform = new createjs.Bitmap(assetsManager.getResult('tank-platform-gray'));
    this.platform.regX = this.platform.regY = TILE.HEIGHT / 2;
    this.addChild(this.platform);
  }
}
