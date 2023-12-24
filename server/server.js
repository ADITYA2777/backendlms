

import app from './app.js';
import connectionDB from './config/dbConnection.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await connectionDB()
    console.log(`APP is Runinng at http://localhost:${PORT}`);
})