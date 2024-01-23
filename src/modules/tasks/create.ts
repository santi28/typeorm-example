import { dataSource } from "../../datasource";
import { User } from "../../entities/user.entity";
import { Task } from "../../entities/tasks.entity";

const userId = 1;

try {
  await dataSource.initialize();
  console.log("Database connected");

  const userRepository = dataSource.manager.getRepository(User);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  const task = new Task();
  task.name = "Tarea 1";
  task.description = "Esta es la tarea 1";
  task.user = user;

  const taskResult = await dataSource.manager.save(task);
  console.log("Task created", taskResult);
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
