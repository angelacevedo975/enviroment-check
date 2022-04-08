export interface FileReader {
  pathToFile: string;

  getFile(): Promise<Array<string>>;
}
