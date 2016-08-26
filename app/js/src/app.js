const app = {
  init() {
    this.stage = new createjs.Stage('game-stage');
    this.createHello();
    this.stage.update();
  },
  createHello() {
    this.hello = new createjs.Text('Hello world', '55px Arial', '#000');
    this.hello.textAlign = 'center';
    this.hello.textBaseline = 'center';
    this.hello.x = this.stage.canvas.width / 2;
    this.hello.y = this.stage.canvas.height / 2;
    this.stage.addChild(this.hello);
  },
};

app.init();
