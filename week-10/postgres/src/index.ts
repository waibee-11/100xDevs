import { Client } from 'pg';

// postgresql://neondb_owner:PRIMJ45OWxbp@ep-patient-poetry-a5441y09.us-east-2.aws.neon.tech/neondb?sslmode=require

const client = new Client({
    connectionString: "postgresql://neondb_owner:PRIMJ45OWxbp@ep-patient-poetry-a5441y09.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}

async function insertUser(username: string, email: string, password: string){
    await client.connect();
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3);';
    const result = await client.query(query, [username, email, password]);
    console.log(result);
}

// createUsersTable();
insertUser("Ved Barve", "ved@barve.com", "wontLetYouGuessIt!");