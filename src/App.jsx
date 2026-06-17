import React, { useState } from "react";
import { modulesData } from "./data/modules";
import ModuleContent from "./components/ModuleContent";
import Home from "./components/Home";
import "./styles/global.css";

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState("home");

  const activeModule = modulesData.find((mod) => mod.id === activeModuleId);

  const handleSelectModule = (id) => {
    setActiveModuleId(id);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="main-header">
        <div className="header-logo" onClick={() => setActiveModuleId("home")} style={{ cursor: "pointer" }}>
          <div className="logo-icon">D</div>
          <div className="header-title-container">
            <span className="header-title">DocuWare Knowledge Portal</span>
            <span className="header-tagline">Learning Center</span>
          </div>
        </div>
        
        <div className="header-nav">
          {activeModuleId !== "home" && (
            <button 
              className="back-home-btn"
              onClick={() => setActiveModuleId("home")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Voltar ao Início
            </button>
          )}
          <span className="header-subtitle">learn.processcloud.app</span>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="main-content no-sidebar">
        {activeModuleId === "home" ? (
          <Home modules={modulesData} onSelectModule={handleSelectModule} />
        ) : (
          <ModuleContent module={activeModule} onBack={() => setActiveModuleId("home")} />
        )}
      </main>
    </div>
  );
}
