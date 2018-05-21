class Units {
  constructor() {
    this.life = setTimeout(() => {
      this.isWounded_ = false;
      this.isDead_ = false;
    }, 600000);
  }

  get isWounded() {
    return this.isWounded_;
  }

  get isDead() {
    return this.isDead_;
  }

  fight() {
    const a = Math.random();
    if (a >= 0.8) {
      this.isWounded_ = true;
    } else if (a >= 0.4) {
      this.isDead_ = true;
    }
  }

}
module.exports = {Units};
