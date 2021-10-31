import randomChar from "./randomChar";

export interface RandomStrFnOptions {
  charSeqs?: string[];
}

export default function randomStr(
  length: number = 0,
  options?: RandomStrFnOptions
): string {
  let str: string = "";
  while (length--) str += randomChar(options?.charSeqs);
  return str;
}
