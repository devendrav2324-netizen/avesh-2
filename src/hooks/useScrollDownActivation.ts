import { useEffect, useState } from "react";

type SectionRef = { current: HTMLElement | null };

export const useScrollDownActivation = (sectionRef: SectionRef, requiredSwipes = 1) => {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let sectionIsVisible = false;
    let listenersAreArmed = false;
    let activated = false;
    let armTimer = 0;
    let wheelEndTimer = 0;
    let wheelGestureActive = false;
    let downwardSwipes = 0;
    let touchStartY: number | null = null;

    const registerDownwardSwipe = () => {
      if (!sectionIsVisible || !listenersAreArmed || activated) return;
      downwardSwipes += 1;
      if (downwardSwipes >= requiredSwipes) {
        activated = true;
        setIsActivated(true);
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0 || !listenersAreArmed) return;
      if (!wheelGestureActive) {
        wheelGestureActive = true;
        registerDownwardSwipe();
      }
      window.clearTimeout(wheelEndTimer);
      wheelEndTimer = window.setTimeout(() => {
        wheelGestureActive = false;
      }, 400);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (listenersAreArmed) touchStartY = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY;
      if (touchStartY !== null && endY !== undefined && touchStartY - endY > 24) {
        registerDownwardSwipe();
      }
      touchStartY = null;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.repeat && ["ArrowDown", "PageDown", " "].includes(event.key)) {
        registerDownwardSwipe();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      sectionIsVisible = entry.isIntersecting;
      window.clearTimeout(armTimer);
      listenersAreArmed = false;
      if (!sectionIsVisible && !activated) {
        downwardSwipes = 0;
        window.clearTimeout(wheelEndTimer);
        wheelGestureActive = false;
      }
      if (sectionIsVisible && !activated) {
        armTimer = window.setTimeout(() => {
          listenersAreArmed = true;
        }, 350);
      }
    }, { threshold: 0.05 });

    observer.observe(section);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      window.clearTimeout(armTimer);
      window.clearTimeout(wheelEndTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sectionRef, requiredSwipes]);

  return isActivated;
};
