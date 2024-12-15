import { Router } from 'express';
import { sendPong, startPong, stopPong } from '../controllers/pong.js';

const pongRoute = Router();

pongRoute.get('/', sendPong)
pongRoute.get('/stop', stopPong);
pongRoute.get('/start', startPong);


export default pongRoute;
