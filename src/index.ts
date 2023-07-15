import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';
import koaCors from 'koa-cors';

import { config } from './config';

const app = new Koa();

const router = new Router();

app.use(KoaLogger());
app.use(koaCors({ maxAge: 86400 }));
app.use(bodyParser());

router.get('/', (ctx, next) => {
    ctx.body = {
        name: "Koa API v1"
    };    
});

router.get('/test', async (ctx) => {
    ctx.body = 'Something';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.PORT, () => {
    console.log(`Server running on port http://localhost:${config.PORT}`);
});

export default app;