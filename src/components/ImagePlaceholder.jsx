import React from "react";

export default function ImagePlaceholder({ imageName, label }) {
  if (!imageName) return null;

  return (
    <div className="card">
      <h3 className="card-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bullets-check"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        Demonstração Visual
      </h3>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
        <img 
          src={`/${imageName}`} 
          alt={label} 
          className="image-card-img"
          onError={(e) => {
            // Fallback inside the component if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="image-fallback"
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '240px',
            backgroundColor: 'var(--color-bg)',
            border: '2px dashed var(--color-border)',
            borderRadius: '8px',
            color: 'var(--color-text-muted)',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.75rem', opacity: 0.6 }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Imagem não encontrada</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Adicione a imagem <strong>public/{imageName}</strong> para substituir este marcador.</p>
        </div>
      </div>
      {label && <p className="image-label">{label}</p>}
    </div>
  );
}
