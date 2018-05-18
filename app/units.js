class Units {

  constructor() {
    this.life = setTimeout(()=>{
      this.isWounded_ = false;
      this.isDead_ = false;
    },1000);
  }

  get isWounded(){
    return this.isWounded_;
  }

  get isDead(){
    return this.isDead_
  }

}
module.exports = {Units};
