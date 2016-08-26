let stage = new createjs.Stage('game-stage');
let hello = new createjs.Text('Hello world', '55px Arial', '#000');
hello.textAlign = 'center';
hello.textBaseline = 'center';
hello.x = stage.canvas.width / 2;
hello.y = stage.canvas.height / 2;
stage.addChild(hello);
stage.update();
