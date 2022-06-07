import { Router } from 'express';
import { createRegistration } from '../controllers';

const router = Router();

router.post('/', createRegistration);

export default router;