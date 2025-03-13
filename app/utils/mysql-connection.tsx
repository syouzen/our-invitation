import {createPool} from 'mysql2';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT!, 10),
  timezone: 'Z',
});

pool.getConnection((err, conn) => {
  if (err) {
    console.error('Error getting connection:', err);
    return;
  }
  conn.release();
});

const executeQuery = async (query: string, arrParams: any[]) => {
  return new Promise((resolve, reject) => {
    pool.query(query, arrParams, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

export default executeQuery;
