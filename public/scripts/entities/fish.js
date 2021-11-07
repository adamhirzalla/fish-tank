class Fish extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish01.png';
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    let newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }

  update(t, denizens) {
    for (let id in denizens) {
      const [x1, y1] = [this.position.x, this.position.y];
      const [x2, y2] = [denizens[id].position.x, denizens[id].position.y];
      if (denizens[id].isTasty && this.level > denizens[id].level &&
          Math.abs(x2 - x1) <= 40 && Math.abs(y2 - y1) <= 40) {
        if (x1 !== x2 && y1 !== y2) {
          console.log(`${this.name} (id: ${this.id}) ate ${denizens[id].name} (id: ${denizens[id].id})`);
          denizens[id].kill();
        }
      }
    }
    super.update(t, denizens);
  }
}

