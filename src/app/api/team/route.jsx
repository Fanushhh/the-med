// import mysql from "mysql2/promise";

// export async function GET() {
//   // Connect to the database
    
//   // const connection = await mysql.createConnection({
//   //   host: process.env.DB_HOST,
//   //   user: process.env.DB_USER,
//   //   password: process.env.DB_PASSWORD,
//   //   database: process.env.DB_NAME,
//   //   port: process.env.DB_PORT,
//   // });

//   // // Execute the query to fetch team members
//   // const [data] = await connection.execute(process.env.DB_TEAM_QUERY);
//   // await connection.end();
//   // // Send the result as JSON
//   // return Response.json({ data });
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT, // usually 3306
//   });

//   // Execute the query to fetch team members
//   const [data] = await connection.execute('your_query');
//   await connection.end();
  
//   // Send the result as JSON
//   res.json({ data });
  
// }
