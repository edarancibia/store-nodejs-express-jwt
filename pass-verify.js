const  bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword = 'admin123';
    const hash = '$2b$10$slKZJFLGKn6uMGNDCA.cwejhCOuFukb7UlRJsf8H7V42DbeaHqbUu';
    const isMatch = await bcrypt.compare(myPassword,hash);
    console.log(isMatch);
}

verifyPassword();