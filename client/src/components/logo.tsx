import logoImage from "@assets/FriendlyAI_Logo_Transparent_1752200294362.png";

export function Logo({ className = "", white = false }: { className?: string; white?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Friendly AI Coach Logo" 
        className="w-10 h-10 mr-3"
      />
      <span className={`text-xl font-bold ${white ? "text-white" : "text-gray-900"}`}>Friendly AI Coaching</span>
    </div>
  );
}
