export type Title = {
  name: string;
  issues: Issue[];
  creator: string;
}

type Issue = {
  id: number;
  type: 'string';
}