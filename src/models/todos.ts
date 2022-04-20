import db from "../database";

export const getTodos = (result) => {
  db.query("SELECT * FROM todos", (err, rows) => {
    if (err) {
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};

export const updateTodos = async (todo: any, result) => {
  db.query(`SELECT * FROM todos WHERE name=?`, [todo], (err, rows) => {
    if (err) {
      result(err, null);
    } else if (rows?.length) {
      result("Todo Already exists!", null);
    } else {
      db.query(`INSERT into todos(name) values(?);`, [todo], (err, rows) => {
        if (err) {
          result(err, null);
        } else {
          result(null, rows);
        }
      });
    }
  });
};

export const deleteTodo = async (id: string, result) => {
  db.query(`DELETE FROM todos WHERE id=?;`, [id], (err, rows) => {
    if (err) {
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};
