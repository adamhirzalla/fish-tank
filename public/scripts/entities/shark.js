class Shark extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/shark.png';
    this.name = 'Shark';
    this.height = 120;
    this.width = 170;
    this.level = 2;
    this.isTasty = false;
  }

}
