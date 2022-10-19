import * as dotenv from 'dotenv';
import Koa from 'koa';
import fetch from 'node-fetch'
import cors from '@koa/cors'

dotenv.config()

const app = new Koa();
app.use(cors({
    origin: process.env.CLIENT_DOMAIN || "localhost"
}));

app.use(async ctx => {
    let id = ctx.path.slice(1);
    if (id.length) {
        let data = await fetch('https://api.delitefully.com/api/canvas/' + id);
        let res = await data.json();

        if (res && res.success === 'true') {
            ctx.body = {
                success: true,
                canvas: res.canvas_url
            }
            return

        }
    }
    ctx.status = 404;
    ctx.body = {
        success: false
    }
});

app.listen(process.env.PROXY_PORT, process.env.PROXY_HOST, undefined, () => {
    console.log(`Canvas proxy running on http://${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`)
});