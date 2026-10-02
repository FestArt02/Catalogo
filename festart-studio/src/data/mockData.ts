import type { Project, Template } from "../types";

export const recentProjects: Project[] = [
  { id: "topper-ana", name: "Topper Ana — 6 anos", category: "Topper", updatedAt: "12 mar 2026", pages: 1, status: "em-edicao" },
  { id: "caixinha-bege", name: "Caixinha Festa Bege", category: "Caixinha", updatedAt: "10 mar 2026", pages: 2, status: "rascunho" },
  { id: "convite-julio", name: "Convite Julio", category: "Convite", updatedAt: "07 mar 2026", pages: 1, status: "pronto" },
];

export const templates: Template[] = [
  { id: "t1", name: "Topper redondo dourado", category: "Toppers", size: "18 × 18 cm", pages: 1, tone: "#f3c179" },
  { id: "t2", name: "Caixinha dobrável", category: "Caixinhas", size: "10 × 10 × 8 cm", pages: 2, tone: "#e8909b" },
  { id: "t3", name: "Etiqueta minimalista", category: "Etiquetas", size: "9 × 5 cm", pages: 1, tone: "#9dc3e6" },
  { id: "t4", name: "Convite A5 clássico", category: "Convites", size: "14,8 × 21 cm", pages: 1, tone: "#b8a6d9" },
];

export const dashboardMenu = [
  { label: "Início", icon: "M4 10.5 12 4l8 6.5V20H4z", active: true },
  { label: "Meus Projetos", icon: "M5 4h9l5 5v11H5z" },
  { label: "Modelos", icon: "M4 5h16v14H4zM9 5v14" },
  { label: "Elementos", icon: "M12 3l8 9-8 9-8-9z" },
  { label: "Uploads", icon: "M12 16V6m0 0l-4 4m4-4 4 4M5 20h14" },
  { label: "Lixeira", icon: "M6 7h12l-1 13H7zM9 7V4h6v3" },
] as const;

export const editorMenu = [
  { label: "Texto", icon: "M5 6h14M12 6v13" },
  { label: "Imagens", icon: "M4 6h16v12H4zM9 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 17l5-5 3 3 3-3 3 5" },
  { label: "Elementos", icon: "M12 3l8 9-8 9-8-9z" },
  { label: "Formas", icon: "M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0zM5 5h6v6H5z" },
  { label: "Modelos", icon: "M4 5h16v14H4zM10 5v14" },
  { label: "Uploads", icon: "M12 16V6m0 0l-4 4m4-4 4 4M5 20h14" },
] as const;
