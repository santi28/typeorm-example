import { User } from "../../entities/user.entity";
import { dataSource } from "../../datasource";
import { Task } from "../../entities/tasks.entity";

try {
  await dataSource.initialize();
  console.log("Database connected");

  const task = new Task();
  task.name = "Tarea 1";
  task.description = "Esta es la tarea 1";

  const taskResult = await dataSource.manager.save(task);
  console.log("Task created", taskResult);
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
