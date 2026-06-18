import React from "react";
import docMgmtSvg from "../assets/images/document-management.svg";
import workflowSvg from "../assets/images/workflow.svg";
import automationSvg from "../assets/images/automation.svg";

// Helper to render beautiful premium icons for each module
const getModuleIcon = (id) => {
  switch (id) {
    case "introducao":
      return (
        <div className="icon-wrapper icon-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
      );
    case "interface":
      return (
        <div className="icon-wrapper icon-indigo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
      );
    case "arquivar":
      return (
        <div className="icon-wrapper icon-emerald">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 10 12 15 7 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line><path d="M20 17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"></path></svg>
        </div>
      );
    case "pesquisar":
      return (
        <div className="icon-wrapper icon-amber">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      );
    case "visualizador":
      return (
        <div className="icon-wrapper icon-cyan">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
      );
    case "workflows":
      return (
        <div className="icon-wrapper icon-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.5 1z"></path></svg>
        </div>
      );
    case "faq":
      return (
        <div className="icon-wrapper icon-rose">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
      );
    default:
      return null;
  }
};

export default function Home({ modules, onSelectModule }) {
  const scrollToGrid = (e) => {
    e.preventDefault();
    document.getElementById("modules-anchor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* SaaS Hero Banner */}
      <section className="hero-banner">
        <div className="hero-left">
          <span className="hero-tag">Portal de Onboarding</span>
          <h1 className="hero-title">
            Bem-vindo ao DocuWare
          </h1>
          <p className="hero-subtitle">
            Aprenda os principais recursos.
          </p>
        </div>
        <div className="hero-right">
          <img 
            src={docMgmtSvg} 
            alt="Gestão Documental DocuWare" 
            className="hero-illustration"
          />
        </div>
        <div className="hero-glow"></div>
        <div className="hero-circle-1"></div>
        <div className="hero-circle-2"></div>
      </section>

      {/* Welcome Features Area */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon-box">
            <span style={{ fontSize: "1.5rem" }}>🎥</span>
          </div>
          <div>
            <h3 className="feature-title">Vídeos Guiados</h3>
            <p className="feature-desc">Aprenda através de demonstrações práticas e focadas.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon-box">
            <span style={{ fontSize: "1.5rem" }}>📚</span>
          </div>
          <div>
            <h3 className="feature-title">Documentação</h3>
            <p className="feature-desc">Guias rápidos e objetivos direto ao ponto.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon-box">
            <span style={{ fontSize: "1.5rem" }}>⚡</span>
          </div>
          <div>
            <h3 className="feature-title">Processos Digitais</h3>
            <p className="feature-desc">Automação inteligente e workflows automatizados DocuWare.</p>
          </div>
        </div>
      </section>

      {/* Grid of Module Cards */}
      <div id="modules-anchor" style={{ scrollMarginTop: "90px" }}>
        <div className="section-header">
          <h2 className="section-title">Módulos de Aprendizado</h2>
          <p className="section-subtitle">Escolha um módulo para iniciar sua capacitação imediata no sistema.</p>
        </div>

        <div className="home-grid">
          {modules.map((mod, index) => (
            <div 
              key={mod.id} 
              className="home-card premium-card"
              onClick={() => onSelectModule(mod.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectModule(mod.id);
                }
              }}
            >
              <div className="home-card-header">
                <span className="home-card-num">Módulo {index + 1}</span>
                {mod.isFAQ && (
                  <span className="home-card-tag faq-tag">Dúvidas</span>
                )}
              </div>
              
              {/* Premium Icon Container */}
              {getModuleIcon(mod.id)}

              <h2 className="home-card-title">{mod.title}</h2>
              <p className="home-card-desc">{mod.description}</p>
              
              <div className="home-card-footer">
                <span className="home-card-action">
                  Abrir módulo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="action-arrow"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
