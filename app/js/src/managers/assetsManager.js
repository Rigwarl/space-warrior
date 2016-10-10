const assetsManager = {
  load(callback) {
    createjs.Sound.alternateExtensions = ['mp3'];
    this.queue = new createjs.LoadQueue();
    this.queue.installPlugin(createjs.Sound);
    this.queue.loadManifest([
      { id: 'spaceship-red', src: 'img/spaceship-red.png' },
    ]);
    this.queue.addEventListener('complete', callback);
  },
  getResult(name) {
    return this.queue.getResult(name);
  },
};

export default assetsManager;
