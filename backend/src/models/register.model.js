import connection from "../data/connection.js"


const registerAccount = async (name, email, password, pokeballs, id_generation) => {
  const [result] = await connection.execute(`
    INSERT INTO user ( name, email, password, pokeballs, id_generation )
    VALUES ( ?, ?, ?, ?, ? )
  `, [name, email, password, pokeballs, id_generation])

  return result.insertId;
}

const findName = async (name) => {
  const [result] =  await connection.execute(`
    SELECT * FROM user 
    WHERE name = ? 
  `, [name])

  return result;
}

const findEmail = async (email) => {
  const [result] =  await connection.execute(`
    SELECT * FROM user 
    WHERE email = ? 
  `, [email])
  return result;
}

export {
  registerAccount,
  findName,
  findEmail,
};

