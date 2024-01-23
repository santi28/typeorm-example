import { dataSource } from "../../datasource";
import { Category } from "../../entities/categories.entity";

const userId = 1;

try {
  await dataSource.initialize();
  console.log("Database connected");

  const category = new Category();
  category.name = "Category 3";

  const categoryResult = await dataSource.manager.save(category);
  console.log("Category created", categoryResult);
} catch (error) {
  console.error(error);
} finally {
  await dataSource.destroy();
  console.log("Database disconnected");
}
