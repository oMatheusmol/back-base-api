const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();
const common = require('../index');
const HttpStatusCode = require('../../app/helpers/httpStatusCode');

/**
 * @author Matheus Mol
*/

describe('POST Product', () => {

  it('WITHOUT TOKEN (UNAUTHORIZED)', async ()=> {
      //test
      const value = {
        "productName": "P6",
        "price": 12,
        "amount": 100
      }
    
      const res = await common.chai.request(common.server)
          .post(`/api/v1/product`)
          .send(value);

      const status =HttpStatusCode.UNAUTHORIZED;
      res.should.have.status(status);
  });

  it('WITH TOKEN (CREATED)', async ()=> {

    const payload = {
      "LOGIN": "login",
      "PASSWORD": "password"
    };
    let token = await common.chai.request(common.server)
          .post(`/api/v1/auth/access-token`)
          .send(payload);
    token = `Bearer ${token.body.data}`;

    //test
    const value = {
      "productName": "banana",
      "price": 12,
      "amount": 100
    }
  
    const res = await common.chai.request(common.server)
        .post(`/api/v1/product`)
        .set({'Authorization': token})
        .send(value);

    const status =HttpStatusCode.CREATED;
    res.should.have.status(status);
  });

});


describe('GET Product', () => {
  const value = {
    "productName": "caneca",
    "price": 12,
    "amount": 100
  }
  const payload = {
    "LOGIN": "login",
    "PASSWORD": "password"
  };

  it('WITHOUT TOKEN (UNAUTHORIZED)', async ()=> {
      //test

      const res = await common.chai.request(common.server)
          .get(`/api/v1/product/${value.productName}`)

      const status =HttpStatusCode.UNAUTHORIZED;
      res.should.have.status(status);
  });

  it('WITH TOKEN (CREATED)', async ()=> {

    let token = await common.chai.request(common.server)
          .post(`/api/v1/auth/access-token`)
          .send(payload);
    token = `Bearer ${token.body.data}`;

    //test

    const res = await common.chai.request( )
        .post({'Authorization': token})
        .get(`/api/v1/product/caneca`)
        
    const status =HttpStatusCode.CREATED;
    res.should.have.status(status);
  });

});