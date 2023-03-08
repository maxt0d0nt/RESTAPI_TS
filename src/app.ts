import express, { Application } from 'express';
import morgan from 'morgan'

export class App {

    app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.setting();
this.middleware();
    }

    setting() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middleware(){
        this.app.use(morgan('dev'))
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', 3000);
    }

}
