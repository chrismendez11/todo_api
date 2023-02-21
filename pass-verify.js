const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'root123'
  const hash = ''
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword()
