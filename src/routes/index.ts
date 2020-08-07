import { Router } from 'express';

import fetchDom from '../services/FetchDom';

const routes = Router();

routes.get('/', (req, res) => res.redirect('/documentation'));

routes.get('/pages', (request, response) => {
  fetchDom(request, response);
});

export default routes;
