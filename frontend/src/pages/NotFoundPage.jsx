import React from 'react';
import { ShieldAlert, Terminal, ArrowLeft, Home } from 'lucide-react';

function NotFoundPage() {
  return (
    <div className="min-h-screen text-[#F5F5F5] font-sans selection:bg-[#FF0000]/20 relative overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF0000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full mx-auto px-6 text-center relative z-10 space-y-8">

        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-white select-none leading-none">
            4<span className="text-brand-red">0</span>4
          </h1>
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-neutral-200 uppercase font-mono">
            Page Not Found
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 max-w-sm mx-auto font-light leading-relaxed">
            The page you are looking for has been shifted, doesnt exist, or has been removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red/60 text-white shadow-lg shadow-[#FF0000]/10 rounded-md text-xs font-semibold transition-all duration-200">
            <Home className="w-3.5 h-3.5" /> Back To Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;