export interface File {
  name: string;
  size: number;
}

export interface Directory extends File {
  children: Set<File | Directory>;
}