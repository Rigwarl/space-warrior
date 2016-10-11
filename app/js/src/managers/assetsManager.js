const assetsManager = {
  load(callback) {
    createjs.Sound.alternateExtensions = ['mp3'];
    this.queue = new createjs.LoadQueue();
    this.queue.installPlugin(createjs.Sound);
    this.queue.loadManifest([
      { id: 'tank-platform-gray', src: 'img/tank-platform-gray.png' },
      { id: 'tank-tower-gray', src: 'img/tank-tower-gray.png' },
    ]);
    this.queue.addEventListener('complete', callback);
  },
  getResult(name) {
    return this.queue.getResult(name);
  },
};

export default assetsManager;
