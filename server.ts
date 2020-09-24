import { express, path } from 'express'

/**
 * https://blog.cloudboost.io/run-your-angular-app-on-nodejs-c89f1e99ddd3
 * */
class Server {
  public app: express.Application; 
  private port = 9090;


  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    // Create expressjs application
    this.app = express();

    //Create api call
    this.app.get('/api', (req, res) => res.json({ application: 'My Angular Showcase' }));
    // Redicrec to owr html file
    this.app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));
    // Define the port
    this.app.listen(this.port, () => console.log(`http is started ${this.port}`));
  }
}

// Bootstrap the server, so it is actually started
const server = Server.bootstrap();
export default server.app;
