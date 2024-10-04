export type Task = {
  id: string;
  title: string;
  status: boolean;
  content: string;
  createdAt: string;
};

export type Filter = "all" | "checked" | "unchecked";
