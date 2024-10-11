export type Task = {
  id: string;
  title: string;
  status: boolean;
  content: string;
  created_at: string;
};

export type Filter = "all" | "checked" | "unchecked";
