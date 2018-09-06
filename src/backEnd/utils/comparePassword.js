import bcrypt from 'bcryptjs';

module.exports = ((password, hashPassword) => new Promise((resolve, reject)=>{
  bcrypt.compare(password, hashPassword, (err, result)=>{
    if(err)
      reject(err);
    resolve(result);
  });
})
);
