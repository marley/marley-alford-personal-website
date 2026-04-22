"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ImageConfig {
  file: string;
  caption: string;
}

interface StoryConfig {
  duration: number;
  images: ImageConfig[];
  endScreen: {
    title: string;
    body: string;
    cta: string;
  };
}

export default function Story() {
  const [config, setConfig] = useState<StoryConfig | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoldingRef = useRef(false);

  // Reset caption expanded state when image changes
  useEffect(() => {
    setIsCaptionExpanded(false);
  }, [currentIndex]);

  // Fetch configuration
  useEffect(() => {
    fetch("/images/captions.json")
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch((err) => console.error("Failed to load captions:", err));
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (!config || isFinished || isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setTimeout(() => {
      if (currentIndex < config.images.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setProgressKey((prev) => prev + 1);
      } else {
        setIsFinished(true);
        setIsPaused(true);
      }
    }, config.duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [config, currentIndex, isPaused, isFinished, progressKey]);

  const goToNext = useCallback(() => {
    if (!config) return;

    if (currentIndex < config.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgressKey((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setIsPaused(true);
    }
  }, [config, currentIndex]);

  const startOver = useCallback(() => {
    setCurrentIndex(0);
    setIsFinished(false);
    setIsPaused(false);
    setProgressKey((prev) => prev + 1);
  }, []);

  const handleMouseDown = useCallback(() => {
    if (!isFinished) {
      isHoldingRef.current = true;
      setIsPaused(true);
    }
  }, [isFinished]);

  const handleMouseUp = useCallback(() => {
    if (!isFinished) {
      isHoldingRef.current = false;
      setIsPaused(false);
    }
  }, [isFinished]);

  const handleMouseLeave = useCallback(() => {
    if (!isFinished) {
      isHoldingRef.current = false;
      setIsPaused(false);
    }
  }, [isFinished]);

  const handleTouchStart = useCallback(() => {
    if (!isFinished) {
      isHoldingRef.current = true;
      setIsPaused(true);
    }
  }, [isFinished]);

  const handleTouchEnd = useCallback(() => {
    if (!isFinished) {
      isHoldingRef.current = false;
      setIsPaused(false);
    }
  }, [isFinished]);

  const handleClick = useCallback(() => {
    if (isFinished || isHoldingRef.current) {
      return;
    }
    goToNext();
  }, [isFinished, goToNext]);

  if (!config) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const currentImage = config.images[currentIndex];
  const durationSeconds = config.duration / 1000;

  return (
    <div
      className="h-screen w-screen bg-black relative overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2 pt-4">
        {config.images.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white rounded-full"
              style={{
                width:
                  index < currentIndex
                    ? "100%"
                    : index === currentIndex
                      ? "0%"
                      : "0%",
                animationName:
                  index === currentIndex && !isFinished
                    ? "progress-fill"
                    : "none",
                animationDuration: `${durationSeconds}s`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        ))}
      </div>

      {/* Helper text */}
      {!isFinished && (
        <div className="absolute top-8 right-2 z-20">
          <p className="text-white/60 text-xs font-medium drop-shadow-md">
            tap screen for next pic | press and hold to pause
          </p>
        </div>
      )}

      {/* Current image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={`/images/${currentImage.file}`}
          alt={currentImage.caption || `Image ${currentIndex + 1}`}
          className={`max-h-screen max-w-screen object-contain transition-all duration-500 ${
            isFinished ? "grayscale brightness-50" : ""
          }`}
          draggable={false}
        />
      </div>

      {/* Preload next image */}
      {currentIndex < config.images.length - 1 && (
        <img
          src={`/images/${config.images[currentIndex + 1].file}`}
          alt=""
          className="hidden"
          draggable={false}
        />
      )}

      {/* Caption */}
      {!isFinished && currentImage.caption && (
        <div className="absolute bottom-20 left-0 right-0 z-10 px-4">
          <div className="text-white text-left text-lg md:text-xl font-medium drop-shadow-lg bg-black/30 px-4 py-2 rounded-lg inline-block mx-auto block w-fit max-w-full">
            <p>
              {isCaptionExpanded || currentImage.caption.length <= 60
                ? currentImage.caption
                : `${currentImage.caption.slice(0, 60)}...`}
            </p>
            {currentImage.caption.length > 60 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCaptionExpanded(!isCaptionExpanded);
                }}
                className="text-white/70 text-sm mt-1 hover:text-white font-bold"
              >
                {isCaptionExpanded ? "show less" : "show more"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* End screen overlay */}
      {isFinished && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60">
          <div className="text-center text-white px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {config.endScreen.title}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              {config.endScreen.body}
            </p>
            <button
              onClick={startOver}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              {config.endScreen.cta}
            </button>
          </div>
        </div>
      )}

      {/* CSS for progress animation */}
      <style jsx>{`
        @keyframes progress-fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
