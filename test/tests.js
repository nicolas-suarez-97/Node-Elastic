const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
let id = '';

describe('POST / Employe',()=> {
    it('OK, Creating a new Employe', (done)=> {
        request(app).post('/api/employe')
        .send({name:'Test Mochas', email: "tm@gmail.com"})
        .then((res)=> {
            expect(res.status).to.equal(201);
            const body = res.body;
            expect(body).to.contain.property('result');
            expect(body.result).to.equal('created');
            id = body._id;
            done();
        })
    });
});

describe('Get / Employe',()=> {

    it('OK, Getting all employes', (done)=> {
        request(app).get('/api/employe')
        .then((res)=>{
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('OK, Getting all employes', (done)=> {
        request(app).get('/api/employe/'+id)
        .then((res)=>{
            const body = res.body;
            expect(res.status).to.equal(200);
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('_source');
            done();
        });
    });
    
});


describe('PUT / Employe',()=> {
    it('OK, Deleting Employe', (done)=> {
        request(app).put('/api/employe/'+id)
        .send({name:'Test Mocha', email: "test@gmail.com"})
        .then((res)=> {
            expect(res.status).to.equal(202);
            const body = res.body;
            expect(body).to.contain.property('result');
            expect(body.result).to.equal('updated');
            done();
        })
    });
});


describe('DELETE / Employe',()=> {
    it('OK, Deleting Employe', (done)=> {
        request(app).delete('/api/employe/'+id)
        .then((res)=> {
            expect(res.status).to.equal(200);
            const body = res.body;
            expect(body).to.contain.property('result');
            expect(body.result).to.equal('deleted');
            done();
        })
    });
});


describe('ERRORS / Employe',()=> {
    it('OK, Catch Error Deleting Employe', (done)=> {
        request(app).delete('/api/employe/123456')
        .then((res)=> {
            expect(res.status).to.equal(404);
            
            done();
        })
    });
    it('OK, Catch Error Creating Employe', (done)=> {
        request(app).post('/api/employe')
        .then((res)=> {
            expect(res.status).to.equal(400);
            done();
        })
    });
    it('OK, Catch Error Creating Employe', (done)=> {
        request(app).post('/api/employe/123456')
        .send({name:'Test Mochas', email: "tm@gmail.com"})
        .then((res)=> {
            expect(res.status).to.equal(404);
            done();
        })
    });
    it('OK, Catch Error Creating Employe', (done)=> {
        request(app).put('/api/employe/123456')
        .send({ email: "tm@gmail.com"})
        .then((res)=> {
            expect(res.status).to.equal(400);
            done();
        })
    });
    it('OK, Catch Error Creating Employe', (done)=> {
        request(app).get('/api/employe/123456')
        .then((res)=> {
            expect(res.body).to.be.empty;
            done();
        })
    });
    

});