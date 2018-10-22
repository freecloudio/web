export interface File {
  path: string;
  name: string;
  size: number;
  ownerName?: string;
  ownerID: number;
}

export interface Directory extends File {
  children: Set<File | Directory>;
}