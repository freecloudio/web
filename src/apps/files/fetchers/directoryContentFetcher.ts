import { Chance } from "chance";
import File from "../models/File";

const chance = new Chance();

export async function directoryContentFetcher() {}

export async function mockDirectoryContentFetcher() {
  await new Promise((res) => setTimeout(res, 200));
  // TODO: Move this mock data to a mocked file service
  let mockData: File[] = [];
  for (let i = 0; i < 10 + chance.integer({ min: 0, max: 25 }); i++) {
    mockData.push({
      type: chance.pickone(["directory", "file"]),
      name: chance.word(),
      size: chance.natural({ max: 1000000 }),
      starred: chance.bool(),
      lastModified: chance.date(),
      id: chance.guid({ version: 4 }),
      sharedWith: chance.n(chance.name, chance.natural({ max: 3 })),
    });
  }

  return mockData;
}
