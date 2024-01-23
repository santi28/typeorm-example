import { dataSource } from "../../datasource";
import { User } from "../../entities/user.entity";

try {
  await dataSource.initialize();
  console.log("Database connected");

  const usersRepository = dataSource.manager.getRepository(User);
  const users = await usersRepository.find({ relations: { tasks: true } });

  console.log("Users", JSON.stringify(users, null, 2));
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
