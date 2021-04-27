import { system, random, date, name, datatype } from "faker";
import File from "../models/File";

export async function directoryContentFetcher() {}

function getSharedWith() {
  let sharedWith = [];
  for (let i = 0; i < datatype.number(4); i++) {
    sharedWith.push(name.findName());
  }
  return sharedWith;
}

export async function mockDirectoryContentFetcher() {
  await new Promise((res) => setTimeout(res, 200));
  // TODO: Move this mock data to a mocked file service
  let mockData: File[] = [];
  for (let i = 0; i < 10 + datatype.number(15); i++) {
    mockData.push({
      type: random.arrayElement(["directory", "file"]),
      name: system.fileName(),
      size: datatype.number(),
      starred: datatype.boolean(),
      lastModified: date.past(),
      id: datatype.uuid(),
      sharedWith: getSharedWith(),
    });
  }

  return mockData;
}
