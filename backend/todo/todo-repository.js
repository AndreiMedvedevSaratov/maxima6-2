import db from "../db/index.js";

const create = async ({ title, status }) => {
  const query = `
        INSERT INTO
            todos (title, status)
        VALUES
            ($1, $2)
        RETURNING *
    ;`;

  const result = await db.query(query, [title, status]);

  return result.rows[0];
};

const findAll = async () => {
  const query = `
        SELECT * FROM todos
        ;`;

  const result = await db.query(query);

  return result.rows;
};

const findOne = async (id) => {
  const query = `
        SELECT * FROM
          todos
        WHERE id = $1
        ;`;

  const result = await db.query(query, [+id]);

  return result.rows[0];
};

const updateOne = async (id, { title, status }) => {
  const query =
    "UPDATE todos SET title  =  $2, status  =  $3 WHERE id  =  $1 RETURNING *;";

  const result = await db.query(query, [+id, title, status]);

  return result.rows[0];
};

const patchOne = async (id, { title, status }) => {
  let query = "UPDATE todos SET";
  const params = [+id];

  if (title !== undefined) {
    query += " title = $2";
    params.push(title);
  }

  if (status !== undefined) {
    if (title !== undefined) {
      query += ",";
    }
    query += " status = $" + (params.length + 1);
    params.push(status);
  }

  query += " WHERE id = $1 RETURNING *;";
  const result = await db.query(query, params);

  return result.rows[0];
};

const deleteOne = async (id) => {
  const query = `
        DELETE FROM
          todos
        WHERE id  =  $1
        RETURNING  *
        ;`;

  const result = await db.query(query, [id]);

  return result.rows[0];
};

export default {
  create,
  findAll,
  findOne,
  updateOne,
  patchOne,
  deleteOne,
};
