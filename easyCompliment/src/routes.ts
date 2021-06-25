import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListComplimentsReceivedUserController } from './controllers/ListComplimentsReceivedUserController';
import { ListComplimentsSubmittedUserController } from './controllers/ListComplimentsSubmittedUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentsReceivedUserController = new ListComplimentsReceivedUserController();
const listComplimentsSubmittedUserController = new ListComplimentsSubmittedUserController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/compliments/receive', ensureAuthenticated, listComplimentsReceivedUserController.handle)
router.get('/compliments/sent', ensureAuthenticated, listComplimentsSubmittedUserController.handle)
router.get('/tags', listTagsController.handle);
router.get('/users/admin', ensureAuthenticated, ensureAdmin, listUsersController.handleAdminUsers);
router.get('/users/non-admin', ensureAuthenticated, ensureAdmin, listUsersController.handleNonAdminUsers);
router.get('/users/all', ensureAuthenticated, ensureAdmin, listUsersController.handleAll);

export { router };