import React from "react";
import VideoCard from "./VideoCard";
import ImagePlaceholder from "./ImagePlaceholder";
import FAQ from "./FAQ";

export default function ModuleContent({ module, onBack }) {
  if (!module) return null;

  const { title, description, bullets, videoTitle, videoUrl, imageLabel, imageName, isFAQ } = module;

  return (
    <div className="module-content-container">
      {onBack && (
        <button 
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "none",
            border: "none",
            color: "var(--color-accent)",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "1.25rem",
            padding: "0",
            transition: "transform 0.2s ease"
          }}
          className="content-back-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Voltar ao Início
        </button>
      )}

      {/* Module Title and Header */}
      <header className="content-header">
        <h1 className="content-title">{title}</h1>
        <p className="content-description">{description}</p>
      </header>

      {isFAQ ? (
        <div className="cards-grid full-width">
          <FAQ />
        </div>
      ) : (
        <div className="cards-grid">
          {/* Main instructional assets column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoCard title={videoTitle} videoUrl={videoUrl} />
            <ImagePlaceholder imageName={imageName} label={imageLabel} />
          </div>

          {/* Key points column */}
          <div className="card">
            <h3 className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bullets-check"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              Pontos Principais
            </h3>
            <ul className="bullets-list">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="bullets-item">
                  <span className="bullets-check">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="bullets-text">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
