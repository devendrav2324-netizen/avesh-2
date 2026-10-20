import React, { useEffect, useState } from "react";
import { ScanEye } from "lucide-react";
import { soundFx } from "../utils/audio";

interface DiagonalArtworkProps {
  onOpenPosterModal?: () => void;
}

export const DiagonalArtwork: React.FC<DiagonalArtworkProps> = ({ onOpenPosterModal }) => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setMotionAllowed(motionPreference.matches);

    const updateMotionPreference = (event: MediaQueryListEvent) => {
      setMotionAllowed(event.matches);
    };

    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!motionAllowed || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setPointerPosition({ x, y });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setPointerPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none group [perspective:1200px]">
      <div
        className={`absolute -inset-5 bg-gradient-to-tr from-[#ff642e]/55 via-[#ff8c43]/20 to-transparent rounded-[2rem] blur-2xl transition-all duration-500 pointer-events-none ${
          isHovered ? "opacity-100 scale-110" : "opacity-60"
        }`}
      />

      <div
        onPointerEnter={(event) => {
          setIsHovered(true);
          if (event.pointerType === "mouse") soundFx.playHover();
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`relative aspect-square w-full overflow-hidden border border-[#ff642e]/70 bg-gradient-to-br from-[#24140e] via-[#0a0908] to-[#1a0d08] p-3 shadow-[0_18px_55px_-20px_rgba(255,100,46,0.3)] transition-[opacity,transform,border-color,box-shadow] ease-out active:scale-[0.99] sm:p-4 ${
          isHovered ? "border-[#ff642e] shadow-[0_30px_80px_-20px_rgba(255,100,46,0.7)] ring-1 ring-[#ff642e]/60 duration-200" : "duration-700"
        } ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          transform: motionAllowed
            ? `rotateX(${-pointerPosition.y * 5}deg) rotateY(${pointerPosition.x * 5}deg)`
            : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        <span className="absolute left-1.5 top-1.5 z-20 h-2 w-2 rounded-full border border-[#ff642e]/80 bg-[#100b08] shadow-[inset_0_0_0_2px_#301307]" />
        <span className="absolute right-1.5 top-1.5 z-20 h-2 w-2 rounded-full border border-[#ff642e]/80 bg-[#100b08] shadow-[inset_0_0_0_2px_#301307]" />
        <span className="absolute bottom-1.5 left-1.5 z-20 h-2 w-2 rounded-full border border-[#ff642e]/80 bg-[#100b08] shadow-[inset_0_0_0_2px_#301307]" />
        <span className="absolute bottom-1.5 right-1.5 z-20 h-2 w-2 rounded-full border border-[#ff642e]/80 bg-[#100b08] shadow-[inset_0_0_0_2px_#301307]" />

        <div className="relative z-10 flex h-full min-h-0 flex-col">
          <div aria-hidden="true" className="mb-2 flex h-3 shrink-0 items-center justify-between border-b border-[#ff642e]/35 px-1 sm:mb-3">
            <span className="h-1.5 w-1.5 rotate-45 border border-sunset bg-[#271006]" />
            <span className="h-px flex-1 mx-2 bg-gradient-to-r from-sunset/80 via-sunset/20 to-transparent" />
            <span className="flex gap-1">
              <span className="h-1 w-3 bg-sunset/80" />
              <span className="h-1 w-1 bg-sunset/40" />
              <span className="h-1 w-1 bg-sunset/20" />
            </span>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden border border-[#ff642e]/35 bg-[#090909]">
            <img
              src="/assets/gec10.jpeg"
              alt="AVESH fest highlights at CGIT, including dance, robotics, music, workshops, and audience events"
              className={`absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out ${
                isHovered ? "scale-[1.035]" : "scale-100"
              }`}
              style={{
                transform: motionAllowed
                  ? `translate3d(${pointerPosition.x * -8}px, ${pointerPosition.y * -8}px, 20px) scale(${isHovered ? 1.035 : 1})`
                  : undefined,
              }}
            />
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.09)_50%)] bg-[length:100%_4px]" />
            <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-sunset" />
            <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-sunset" />
            <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-sunset" />
            <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-sunset" />
          </div>

          <div aria-hidden="true" className="mt-2 flex h-2 shrink-0 items-center justify-between border-t border-[#ff642e]/35 px-1 sm:mt-3">
            <span className="h-px w-1/4 bg-gradient-to-r from-sunset/80 to-sunset/10" />
            <span className="flex gap-1">
              <span className="h-1 w-1 bg-sunset" />
              <span className="h-1 w-1 bg-sunset/60" />
              <span className="h-1 w-1 bg-sunset/30" />
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle at ${(pointerPosition.x + 0.5) * 100}% ${(pointerPosition.y + 0.5) * 100}%, rgba(255,100,46,0.3), transparent 42%)`,
          }}
        />
      </div>

      {onOpenPosterModal && (
        <button
          onClick={onOpenPosterModal}
          aria-label="Open poster reference"
          title="Open poster reference"
          className="absolute -bottom-1 right-0 z-30 translate-y-full border border-[#ff642e]/60 bg-[#100b08] p-2 text-sunset transition-colors hover:border-sunset hover:bg-sunset hover:text-[#100b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunset"
        >
          <ScanEye className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
