import { factory } from "@findhow/zod-factory";
import AnimalSchema from "./animal.schema.ts";

const AnimalFactory = factory(AnimalSchema, (faker) => ({
  id: faker.string.uuid(),
  owner: faker.person.fullName(),
  animal: faker.animal.cat(),
}));

export default AnimalFactory;
