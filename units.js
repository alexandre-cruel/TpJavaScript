class Units {

  constructor() {

    this.status_ = 1; // Alive | Status == 0 ( Dead ) | Status == 2 ( Wounded)
    // Mort de vieillesse ?

  }

  get status() {
    return this.status_;
  }

  isWounded(index) {
    this.status != 2 ? false : true;
  }

  isDead() {
    this.status != 0 ? false : true;
  }

  fight() {
    return new Promise((resolve, reject) => {
      // a chaque rang du tableau des Units chance de mourrir / etre blessé /
      // survivre sans dommages
    });
  }
}

module.exports = {Units};
