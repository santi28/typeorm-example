import { User } from "../../entities/user.entity";
import { dataSource } from "../../datasource";

try {
  await dataSource.initialize();
  console.log("Database connected");

  const usersRepository = dataSource.manager.getRepository(User);
  const users = await usersRepository.find();

  console.log("Users", JSON.stringify(users, null, 2));
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
