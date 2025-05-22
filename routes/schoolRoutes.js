import e from 'express';
const router = e.Router();
import * as controller from '../controller/schoolController.js';

router.post('/addSchool', controller.addSchool);
router.get('/listSchools', controller.listSchools);

export default router;
