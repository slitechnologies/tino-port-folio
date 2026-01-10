import React, { useState, useEffect } from 'react';
import {Play, Pause, SkipForward, Code, Zap, Cpu } from 'lucide-react';

const HolographicCodeShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const codeSnippets = [
    {
      language: 'Spring Boot',
      label: 'Family Reconnection API',
      icon: '🌱',
      code: `@RestController
public class FamilyController {
  @GetMapping("/reconnect/{id}")
  public ReconnectionResult 
  findLostFamily(@PathVariable String id) {
    return aiMatcher
      .findBestMatch(id)
      .orElseThrow(FamilyNotFoundException::new);
  }
}`,
      color: 'from-red-500/40 via-red-600/30 to-transparent'
    },
    {
      language: 'FastAPI',
      label: 'ML Matching Endpoint',
      icon: '🐍',
      code: `@app.post("/predict-match")
async def predict_match(request: MatchRequest):
    features = preprocess(request)
    confidence = model.predict([features])[0][1]
    
    if confidence > 0.85:
        return MatchResponse(
            match_id=generate_id(),
            confidence=confidence
        )`,
      color: 'from-yellow-500/40 via-yellow-600/30 to-transparent'
    },
    {
      language: 'React',
      label: 'Family Reunion UI',
      icon: '⚛️',
      code: `const FamilyReunionView = () => {
  const { caseId } = useParams();
  const [family, setFamily] = useState();
  
  useEffect(() => {
    api.get(\`/families/\${caseId}\`)
       .then(setFamily);
  }, [caseId]);
  
  return (
    <GlassCard>
      <MatchConfidence score={family?.confidence} />
      <ReunionTimeline />
    </GlassCard>
  );
};`,
      color: 'from-blue-500/40 via-blue-600/30 to-transparent'
    },
    {
      language: 'Docker',
      label: 'Microservices Stack',
      icon: '🐳',
      code: `version: '3.8'
services:
  api-gateway:
    image: springcloud/gateway
    ports: ["8080:8080"]
  
  family-service:
    build: ./family-service
    environment:
      - DB_URL=postgres://db:5432
      - REDIS_HOST=redis`,
      color: 'from-cyan-500/40 via-cyan-600/30 to-transparent'
    }
  ];

  const typingSpeed = 30; // ms per character
  const currentSnippet = codeSnippets[activeIndex];

  // Typing effect
  useEffect(() => {
    if (!isTyping || !isPlaying) return;
    
    const fullCode = currentSnippet.code;
    if (displayedCode.length < fullCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(fullCode.substring(0, displayedCode.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, wait then next
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedCode('');
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedCode, isTyping, isPlaying, currentSnippet]);

  // Reset on snippet change
  useEffect(() => {
    setDisplayedCode('');
    setIsTyping(true);
  }, [activeIndex]);

  const progress = currentSnippet.code 
    ? Math.round((displayedCode.length / currentSnippet.code.length) * 100)
    : 0;

  return (
    <div className="relative w-full h-full">
      {/* Holographic glow effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSnippet.color} opacity-20`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                             linear-gradient(0deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>
        
        {/* Scanning line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative h-full flex flex-col">
        {/* Header - Glass panel */}
        <div className="relative p-3 border-b border-white/20 backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/30 to-cyan-500/30">
                <Code className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {currentSnippet.icon} {currentSnippet.language}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-300">{currentSnippet.label}</span>
                </div>
                <div className="text-xs text-cyan-400 font-mono mt-0.5">
                  {isPlaying ? 'LIVE_TYPING' : 'PAUSED'} | {progress}% COMPLETE
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? 
                  <Pause className="w-3.5 h-3.5 text-gray-300" /> : 
                  <Play className="w-3.5 h-3.5 text-gray-300" />
                }
              </button>
              
              <button
                onClick={() => {
                  setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
                }}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                title="Next"
              >
                <SkipForward className="w-3.5 h-3.5 text-gray-300" />
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2 h-0.5 bg-gray-800/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Code display - Holographic text */}
        <div className="flex-1 overflow-hidden p-3">
          <div className="relative h-full">
            {/* Code with holographic glow */}
            <pre className="font-mono text-xs leading-relaxed h-full overflow-auto">
              <code className="text-cyan-100/90 drop-shadow-lg">
                {displayedCode}
                {/* Blinking cursor */}
                {isTyping && isPlaying && (
                  <span className="inline-block w-[3px] h-4 bg-cyan-400 ml-0.5 animate-pulse"></span>
                )}
              </code>
            </pre>
            
            {/* Binary rain effect in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-cyan-400/10 font-mono text-xs animate-binary-fall"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer - Status indicators */}
        <div className="p-3 border-t border-white/20 backdrop-blur-sm bg-gradient-to-r from-white/2 to-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs text-gray-300">SYSTEM_ACTIVE</span>
              </div>
              
              <div className="flex items-center gap-1">
                {codeSnippets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      activeIndex === idx 
                        ? 'bg-cyan-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Show ${codeSnippets[idx].language}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-gray-400 font-mono">
                SPEED: {typingSpeed}ms/char
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-12 h-12">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/50"></div>
      </div>
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-400/50"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12">
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-purple-400/50"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12">
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-400/50"></div>
      </div>
      
      {/* CPU indicator */}
      <div className="absolute top-2 right-2">
        <div className="relative">
          <Cpu className="w-3 h-3 text-cyan-300/70" />
          <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default HolographicCodeShowcase;