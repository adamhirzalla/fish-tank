class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.name = 'GoFish';
    this.isTasty = true;
    this.level = 0;
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
