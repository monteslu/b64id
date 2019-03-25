
const chai = require('chai');
const should = chai.should();

const b64id = require('../index.js');



describe('b64id', function() {

  it('should create an id', function(done) {
    const id = b64id.generateId();
    id.should.be.a('string');
    id.length.should.equal(22);
    done();
  });


  it('should decode a base64 id', (done) => {
    const uuidStr = b64id.b64ToUuid('iJgufsh8R1ir8mo2qMPg4A');
    uuidStr.should.equal('88982e7e-c87c-4758-abf2-6a36a8c3e0e0');
    done();
  });

  it('should encode a uuid', (done) => {
    const b64Str = b64id.uuidToB64('c6ba6cd8-aaef-4c1b-a29b-5cba87e2a888');
    b64Str.should.equal('xrps2KrvTBuim1y6h-KoiA');
    done();
  });

});
