import React from 'react';

// Ethnic Top Border Strip (Repeating Indian Jaali & Geometric Lotus Pattern)
export function EthnicBorderStrip({ className = "w-full text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12 C10 4 20 4 30 12 C40 20 50 20 60 12 C70 4 80 4 90 12 C100 20 110 20 120 12 C130 4 140 4 150 12 C160 20 170 20 180 12 C190 4 200 4 210 12 C220 20 230 20 240 12 C250 4 260 4 270 12 C280 20 290 20 300 12 C310 4 320 4 330 12 C340 20 350 20 360 12 C370 4 380 4 390 12 C400 20 410 20 420 12"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"
      />
      {/* Repeating Lotus & Diamond Ornaments */}
      {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => (
        <g key={i} transform={`translate(${x}, 12)`}>
          <polygon points="0,-6 6,0 0,6 -6,0" fill="currentColor" opacity="0.3" />
          <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.6" />
        </g>
      ))}
      <line x1="0" y1="23" x2="400" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    </svg>
  );
}

// Indian Heritage Mandala Circular Ornament
export function MandalaMotif({ className = "w-32 h-32 text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.08" />
      
      {/* 12 Petal Lotus Flower */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path d="M50 12 C53 22 53 32 50 38 C47 32 47 22 50 12 Z" fill="currentColor" opacity="0.2" />
          <circle cx="50" cy="8" r="2" fill="currentColor" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

// Delhi Heritage Mughal Arch & Jaali Pattern Accent
export function MughalArchPattern({ className = "w-full text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 30 V12 C30 12 40 4 50 0 C60 4 70 12 100 12 C130 12 140 4 150 0 C160 4 170 12 200 12 V30"
        stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"
      />
      <circle cx="50" cy="14" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="150" cy="14" r="2.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// Qutub Minar Architectural Silhouette Accent
export function QutubMinarSilhouette({ className = "w-36 h-72 text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 300" fill="currentColor" opacity="0.4" xmlns="http://www.w3.org/2000/svg">
      {/* Base Foundation */}
      <rect x="25" y="285" width="50" height="15" rx="1" />
      <rect x="28" y="270" width="44" height="15" rx="1" />
      {/* Tier 1 (Widest fluted base tier) */}
      <polygon points="30,270 34,190 66,190 70,270" />
      <rect x="29" y="185" width="42" height="5" rx="1" />
      
      {/* Tier 2 */}
      <polygon points="35,185 38,120 62,120 65,185" />
      <rect x="34" y="115" width="32" height="5" rx="1" />

      {/* Tier 3 */}
      <polygon points="39,115 42,60 58,60 61,115" />
      <rect x="38" y="55" width="24" height="5" rx="1" />

      {/* Top Spire */}
      <polygon points="43,55 45,20 55,20 57,55" />
      <polygon points="46,20 50,5 54,20" />
      <line x1="50" y1="5" x2="50" y2="0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// India Gate Triumphal Arch Silhouette Accent
export function IndiaGateSilhouette({ className = "w-48 h-48 text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" opacity="0.4" xmlns="http://www.w3.org/2000/svg">
      {/* Base Plinth */}
      <rect x="15" y="180" width="170" height="12" rx="1" />
      <rect x="25" y="172" width="150" height="8" rx="1" />

      {/* Main Arch Structure Path */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 172 V 65 H 170 V 172 H 135 V 105 C 135 80, 65 80, 65 105 V 172 H 30 Z"
      />

      {/* Side Arch Wall Details */}
      <rect x="38" y="80" width="20" height="82" opacity="0.15" fill="white" />
      <rect x="142" y="80" width="20" height="82" opacity="0.15" fill="white" />

      {/* Entablature & Cornice Layers */}
      <rect x="22" y="55" width="156" height="10" rx="1" />
      <rect x="18" y="48" width="164" height="7" rx="1" />

      {/* Attic Tier */}
      <rect x="35" y="28" width="130" height="20" rx="1" />
      <rect x="30" y="24" width="140" height="4" rx="1" />

      {/* Top Dome / Cupola */}
      <path d="M85 24 C85 14, 115 14, 115 24 Z" />
      <rect x="94" y="10" width="12" height="4" rx="1" />
      <circle cx="100" cy="8" r="3" />
    </svg>
  );
}

// Left Side Pencil Sketch Line Art (Qutub Minar + India Gate + EV Charger & Vehicle Outlines)
export function PencilSketchLeftLandmarks({ className = "w-64 h-48 text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 180" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" xmlns="http://www.w3.org/2000/svg">
      {/* Ground Line */}
      <line x1="0" y1="175" x2="240" y2="175" strokeWidth="1" strokeDasharray="4 2" />
      
      {/* Qutub Minar Sketch */}
      <path d="M25 175 L30 110 L28 110 L32 60 L30 60 L34 20 L38 20 L42 60 L40 60 L44 110 L42 110 L47 175 Z" />
      <line x1="28" y1="108" x2="44" y2="108" />
      <line x1="30" y1="58" x2="42" y2="58" />
      <line x1="34" y1="18" x2="38" y2="18" />
      <circle cx="36" cy="14" r="2" />
      
      {/* India Gate Sketch */}
      <path d="M70 175 V90 H140 V175 H115 V125 C115 105 95 105 95 125 V175 H70 Z" />
      <rect x="65" y="80" width="80" height="10" />
      <rect x="75" y="65" width="60" height="15" />
      <path d="M98 65 C98 58 112 58 112 65 Z" />
      
      {/* EV Charging Station Dock Line Art */}
      <rect x="165" y="110" width="24" height="65" rx="3" />
      <circle cx="177" cy="130" r="5" />
      <path d="M177 127 L175 131 H179 L177 134" strokeWidth="1.5" />
      <path d="M189 130 C198 130 198 160 192 165" />

      {/* Electric Auto Sketch Line Art */}
      <path d="M200 175 C200 155 210 145 225 145 C235 145 240 155 240 175 Z" />
      <circle cx="208" cy="175" r="5" />
      <circle cx="232" cy="175" r="5" />
    </svg>
  );
}

// Right Side Pencil Sketch Line Art (Red Fort + Lotus Temple + Minar Outlines)
export function PencilSketchRightLandmarks({ className = "w-64 h-48 text-[#2E7D32]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 180" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" xmlns="http://www.w3.org/2000/svg">
      {/* Ground Line */}
      <line x1="0" y1="175" x2="240" y2="175" strokeWidth="1" strokeDasharray="4 2" />

      {/* Lotus Temple Sketch */}
      <path d="M20 175 C30 140 50 120 70 175 C50 145 35 155 20 175 Z" />
      <path d="M70 175 C90 120 110 140 120 175 C105 155 90 145 70 175 Z" />
      <path d="M45 175 C55 135 85 135 95 175 Z" />

      {/* Red Fort Wall & Domes Sketch */}
      <path d="M130 175 V110 H230 V175 H200 V130 C200 120 160 120 160 130 V175 H130 Z" />
      <path d="M140 110 C140 95 160 95 160 110 Z" />
      <path d="M200 110 C200 95 220 95 220 110 Z" />
      <line x1="150" y1="95" x2="150" y2="88" />
      <line x1="210" y1="95" x2="210" y2="88" />

      {/* Qutub Minar Silhouette Outline on Far Right */}
      <path d="M225 175 L227 120 L226 120 L228 70 L232 70 L231 120 L233 175 Z" />
      <circle cx="229.5" cy="67" r="2" />
    </svg>
  );
}

