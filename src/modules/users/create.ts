import { User } from "../../entities/user.entity";
import { dataSource } from "../../datasource";

try {
  await dataSource.initialize();
  console.log("Database connected");

  const user = new User();
  user.name = "Santiago de Nicolás";
  user.email = "santidenicolas@gmail.com";

  const userResult = await dataSource.manager.save(user);
  console.log("User created", userResult);
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
