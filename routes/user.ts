import { Router } from 'express';
import { createUser, deleteUser, getUser, seddUser, getUsers, updateUser } from '../controllers';

const router = Router();

router.get('/', getUsers);
router.get('/seed/', seddUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;