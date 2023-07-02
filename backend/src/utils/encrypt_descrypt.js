import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';


const passHash = async (password)=> {
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)
  return passwordHash

}

const chechPass = async (pass, passData) => {

  const checkPassword = await bcrypt.compare(pass, passData);
  return checkPassword;
}



const jwtSign = (pass) => {
  const secret = process.env.SECRET;
      const token = jwt.sign({
        id: pass,
      },
      secret
    )
      return token;
}

  export {
    passHash,
    chechPass,
    jwtSign,
  }