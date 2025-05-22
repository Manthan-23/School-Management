import e from 'express';
const app = e();
import dotenv from 'dotenv';
dotenv.config();

import schoolRoutes from './routes/schoolRoutes.js';

app.use(e.json());
app.use('/', schoolRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
