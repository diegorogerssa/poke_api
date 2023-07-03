import connection from "../data/connection.js"

const findById = async (id) => {
  const [result] =  await connection.execute(`
    SELECT name, email FROM user 
    WHERE id = ? 
  `, [id])
  return result;
}

export {
  findById
};

