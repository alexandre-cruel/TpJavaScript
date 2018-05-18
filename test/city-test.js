const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {City} = require('../app/city');

chai.use(chaiAsPromised);
chai.should();

describe('city.js',()=>{
  describe('tradingCorn', () => {
    let athene;

    before(() => {
      athene = new City();
      athene.init();

    });

    after(()=>{
      athene.deleteCity()
    });

    it('should have added corn', async () => {

      await new Promise((resolve, reject) => {
        athene.buyCorn(10).on('achat',achat => {
          achat.corn.should.be.equal(10);
          achat.corn.should.be.equal(90);
          resolve();
        })
      })
    });
  })
});


