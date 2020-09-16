import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CategoriesController from './app/controllers/CategoriesController';
import FilesController from './app/controllers/FilesController';
import MoviesController from './app/controllers/MoviesController';
import ProgramsController from './app/controllers/ProgramsController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/categories', CategoriesController.store);
routes.get('/categories', CategoriesController.index);

routes.get('/programs/:id', ProgramsController.index);

routes.get('/movies', MoviesController.index);
routes.get('/movies/:id', MoviesController.show);
routes.post('/movies', MoviesController.store);
routes.put('/movies/:id', MoviesController.update);

routes.post('/files', upload.single('file'), FilesController.store);
routes.get('/files/:id', FilesController.index);
export default routes;
