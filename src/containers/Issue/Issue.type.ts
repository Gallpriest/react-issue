export type IssueData = {
  status: string;
  name: string,
  creator: string,
  tags: Tag[],
  participants: Person[],
  comments: string[]
};

export type Tag = { id: string; name: string };

type Person = { person: string, id: number };
