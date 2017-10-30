const App = require('yeps');
const chai = require('chai');
const chaiHttp = require('chai-http');
const srv = require('yeps-server');
const helmet = require('..');

const { expect } = chai;

chai.use(chaiHttp);
let app;
let server;

describe('YEPS helmet', async () => {
  beforeEach(() => {
    app = new App();
    server = srv.createHttpServer(app);
  });

  afterEach(() => {
    server.close();
  });

  it('should test helmet', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(helmet());

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.headers['x-dns-prefetch-control']).to.be.equal('off');
        expect(res.headers['x-frame-options']).to.be.equal('SAMEORIGIN');
        expect(res.headers['x-download-options']).to.be.equal('noopen');
        expect(res.headers['x-content-type-options']).to.be.equal('nosniff');
        expect(res.headers['x-xss-protection']).to.be.equal('1; mode=block');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should test helmet with options', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(helmet({
      frameguard: {
        action: 'deny',
      },
    }));

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.headers['x-dns-prefetch-control']).to.be.equal('off');
        expect(res.headers['x-frame-options']).to.be.equal('DENY');
        expect(res.headers['x-download-options']).to.be.equal('noopen');
        expect(res.headers['x-content-type-options']).to.be.equal('nosniff');
        expect(res.headers['x-xss-protection']).to.be.equal('1; mode=block');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });
});
