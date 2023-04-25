import express from 'express'
import { Server } from 'socket.io'
import handlerbars from 'express-handlebars'

const app = express();

app.use(express.static(`${__dirname}/public`));

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

const server = app.listen(8080, () => console.log('Server runing'));
const io = new Server (server);