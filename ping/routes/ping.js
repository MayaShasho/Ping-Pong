import { Router } from 'express';
import { sendPing, startPing, stopPing } from '../controllers/ping.js';

const pingRoute = Router();
pingRoute.get('/', sendPing)
pingRoute.get('/stop', stopPing);
pingRoute.get('/start', startPing);

export default pingRoute;
