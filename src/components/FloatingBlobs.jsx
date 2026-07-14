export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Purple Glow Blob */}
      <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accentViolet/10 blur-[80px] md:blur-[140px]" />

      {/* Blue Glow Blob */}
      <div className="absolute top-[40%] right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-accentSky/10 blur-[80px] md:blur-[140px]" />

      {/* Secondary Indigo Blob */}
      <div className="absolute bottom-[10%] left-[20%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-indigo-500/5 blur-[80px] md:blur-[140px]" />

      {/* Grid pattern overlay for coding texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
