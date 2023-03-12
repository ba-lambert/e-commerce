/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './src/app';
import connectDb from './src/database/connectDb';

dotenv.config();

const PORT = process.env.PORT || 5050;

(async () => {
  await connectDb();
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
