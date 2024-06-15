import db from "../index.js";
import createTodosTable from "./1_create_todos_table.js";

const runDbMigrations = async () => {
  console.log("Beginning database migrations");

  const client = await db.connect();

  try {
    await client.query("Begin");

    await client.query(createTodosTable);

    await client.query("Commit");

    console.log("Finished database migrations");
  } catch (e) {
    await client.query("Rollback");

    console.log("Failed to migrate database");

    throw e;
  } finally {
    client.release();
  }
};

export default runDbMigrations;
