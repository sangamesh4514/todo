import db from '../database'

export const getTodos=()=>{
  return new Promise((resolve,reject)=>{
    db.query('SELECT * FROM todos', (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  })
}

export const updateTodos = (todo) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT into todos(name) values(?);`,[todo],(error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  })
}

export const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM todos WHERE id=?;`, [id], (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  })
}