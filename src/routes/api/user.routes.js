import { Router } from 'express';
import { registerUser, getAllusers } from '../../controllers/user.controller';
import verifyUser from '../../middlewares/verifyUser';
const route = Router();

route.post('/signup', verifyUser, registerUser);
route.get('/', getAllusers);

export default route;
