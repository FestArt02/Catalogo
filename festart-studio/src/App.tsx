import { useState } from "react";

const toolbarItems = [
  { label: "Texto", icon: "T" },
  { label: "Elementos", icon: "◇" },
  { label: "Imagens", icon: "▧" },
  { label: "Fontes", icon: "A" },
  { label: "Frases", icon: "✦" },
  { label: "Molduras", icon: "□" },
];

const pageThumbnails = ["Capa", "Página 2"];

export default function App() {
  const [activeTool, setActiveTool] = useState("Texto");
  const [zoom, setZoom] = useState("60%");
  const [showProjects, setShowProjects] = useState(false);

  return (
    <main className="initial-layout">
      <header className="initial-header">
        <div className="initial-brand">
          <div className="initial-brand-icon">✦</div>
          <div>
            <strong>Gerador</strong>
            <span>Mio Fácil</span>
            <small>papelaria criativa</small>
          </div>
        </div>

        <div className="initial-header-actions">
          <button className="soft-control">Português - Original⌄</button>
          <button className="soft-control">Salvar na minha conta</button>
          <button className="soft-control">⌘ Verificar ortografia</button>
          <button className="download-button">⇩ Baixar agenda</button>
        </div>
      </header>

      <section className="initial-workspace">
        <div className="initial-settings-card">
          <div className="setting-group">
            <label>TAMANHO</label>
            <button className="setting-select">A5 · 14,8 × 21 cm <span>⌄</span></button>
          </div>
          <div className="setting-group setting-wide">
            <label>VERSÃO DO MIOLO</label>
            <button className="setting-select">1 página de miolo <span>⌄</span></button>
          </div>
          <div className="setting-group year-group">
            <label>ANO</label>
            <input value="2027" readOnly aria-label="Ano" />
          </div>
          <button className="action-control">⚙ Configurar</button>
          <button className="action-control">✣ MOCKUP</button>
          <button className="action-control" onClick={() => setShowProjects((visible) => !visible)}>
            ▱ Meus projetos
          </button>
          <div className="settings-bottom-row">
            <button className="color-control"><span className="color-swatch" /> Candy color</button>
            <button className="color-control">◉ Escolher cores</button>
            <span className="settings-hint">Editor de estilos</span>
          </div>
        </div>

        {showProjects && (
          <div className="projects-popover">
            <strong>Meus projetos</strong>
            <span>Nenhum projeto salvo nesta sessão.</span>
          </div>
        )}

        <div className="section-heading">
          <strong>Capa</strong>
          <div className="page-counter">
            <span>Designs desta folha</span>
            <button>‹</button>
            <small>1 / 22</small>
            <button>›</button>
          </div>
        </div>

        <div className="accordion-row">▸ Frases - coleções, versículos e frases próprias</div>
        <div className="accordion-row">▸ Rodapés decorativos</div>

        <div className="editor-toolbar">
          <button className="round-tool">↶</button>
          <button className="round-tool">↷</button>
          <span className="toolbar-divider" />
          {toolbarItems.map((item) => (
            <button
              key={item.label}
              className={`toolbar-item ${activeTool === item.label ? "selected" : ""}`}
              onClick={() => setActiveTool(item.label)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
          <select className="zoom-select" value={zoom} onChange={(event) => setZoom(event.target.value)} aria-label="Zoom">
            <option>40%</option>
            <option>60%</option>
            <option>80%</option>
            <option>100%</option>
          </select>
        </div>

        <div className="editor-tip">◈ Clique no texto para escrever na própria folha. Arraste para mover.</div>

        <div className="initial-canvas-area">
          <div className="initial-canvas">
            <div className="spiral-binding">
              {Array.from({ length: 7 }, (_, index) => <span key={index} />)}
            </div>
            <div className="cover-content">
              <div className="cover-small-text">MINHA</div>
              <div className="cover-title">Agenda</div>
              <div className="cover-subtitle">2027</div>
              <div className="cover-line" />
              <span className="cover-edit-label">Clique para editar</span>
            </div>
          </div>
        </div>

        <footer className="initial-pagebar">
          {pageThumbnails.map((page, index) => (
            <button key={page} className={`page-thumbnail ${index === 0 ? "active" : ""}`}>
              <span>{page}</span>
            </button>
          ))}
          <button className="add-page">＋</button>
          <span className="pagebar-label">Página atual: {activeTool}</span>
        </footer>
      </section>
    </main>
  );
}
