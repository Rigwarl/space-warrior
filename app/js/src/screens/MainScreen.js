export default class MainScreen extends createjs.Container {
  constructor() {
    super();
    this.addChild(new createjs.Text('MainScreen', '55px Arial', '#000'));
  }
}
