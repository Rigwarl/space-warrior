import { TILE } from '../config';
import assetsManager from '../managers/assetsManager';

export default class Bullet extends createjs.Bitmap {
  constructor(rot) {
    super(assetsManager.getResult('bullet'));

    this.regX = TILE.WIDTH / 2;
    this.regY = TILE.HEIGHT / 2;

    this.v = 10;
    this.rotation = rot;

    this.vY = this.v * Math.cos(rot * Math.PI / 180);
    this.vX = this.v * Math.sin(-rot * Math.PI / 180);

    this.addEventListener('tick', () => {
      this.x -= this.vX;
      this.y -= this.vY;
    });
  }
}
