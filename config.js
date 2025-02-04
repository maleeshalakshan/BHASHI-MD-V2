const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "2nB1VQbQ#cYF7BcH7D4D5FxEZ5HU6W9zFpJQs-2n1xLP3-I_sZKY",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://laramd:sadeesha2006@anya.gvsp435.mongodb.net/?retryWrites=true&w=majority&appName=Anya",

    
 
};
