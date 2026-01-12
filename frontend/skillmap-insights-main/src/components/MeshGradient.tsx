const MeshGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary blue orb - top right */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)' }}
      />
      
      {/* Secondary blue orb - bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(221 83% 53%) 0%, transparent 70%)' }}
      />
      
      {/* Accent orb - center right */}
      <div 
        className="absolute top-1/2 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(224 76% 48%) 0%, transparent 70%)' }}
      />
      
      {/* Subtle orb - top left */}
      <div 
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(217 91% 55%) 0%, transparent 70%)' }}
      />
      
      {/* Deep blue orb - bottom center */}
      <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, hsl(222 47% 20%) 0%, transparent 70%)' }}
      />
    </div>
  );
};

export default MeshGradient;
