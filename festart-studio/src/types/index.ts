export type ProjectStatus = "rascunho" | "em-edicao" | "pronto";

export interface Project {
  id: string;
  name: string;
  category: string;
  updatedAt: string;
  pages: number;
  status: ProjectStatus;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  size: string;
  pages: number;
  tone: string;
}
