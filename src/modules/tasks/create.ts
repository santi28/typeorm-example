import { dataSource } from "../../datasource";
import { User } from "../../entities/user.entity";
import { Task } from "../../entities/tasks.entity";
import { Category } from "../../entities/categories.entity";
import ts from "typescript";
import { In } from "typeorm";

const userId = 1;
const categoriesIds = [2, 3];

try {
  await dataSource.initialize();
  console.log("Database connected");

  const userRepository = dataSource.manager.getRepository(User);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }

  // Buscamos que las categorias existan
  const categoriesRepository = dataSource.manager.getRepository(Category);

  const task = new Task();
  task.name = "Tarea 2";
  task.description = "Esta es la tarea 2";
  task.user = user;

  const foundedCategories = await categoriesRepository.find({
    where: { id: In(categoriesIds) },
  });

  task.categories = foundedCategories;

  const taskResult = await dataSource.manager.save(task);
  console.log("Task created", taskResult);
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
