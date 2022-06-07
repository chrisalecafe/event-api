import { Router } from 'express';
import { auth } from '../controllers';

const router = Router();


router.post('/', auth);

export default router;