const SONGS = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      mood: "night",
      colorA: "#6d28d9",
      colorB: "#0ea5e9",
      audio: "assets/audio/blinding-lights.mp3",
      description: "Fast neon-pop with a night-drive feeling."
    },
    {
      id: 2,
      title: "Good Days",
      artist: "SZA",
      mood: "chill",
      colorA: "#14b8a6",
      colorB: "#facc15",
      audio: "assets/audio/good-days.mp3",
      description: "Soft and relaxed R&B atmosphere."
    },
    {
      id: 3,
      title: "SICKO MODE",
      artist: "Travis Scott",
      mood: "hype",
      colorA: "#ef4444",
      colorB: "#f97316",
      audio: "assets/audio/sicko-mode.mp3",
      description: "High-energy track with strong transitions."
    },
    {
      id: 4,
      title: "Sunset Study",
      artist: "Lofi Beats",
      mood: "focus",
      colorA: "#38bdf8",
      colorB: "#818cf8",
      audio: "assets/audio/sunset-study.mp3",
      description: "Instrumental focus sound for studying."
    },
    {
      id: 5,
      title: "when the party's over",
      artist: "Billie Eilish",
      mood: "sad",
      colorA: "#64748b",
      colorB: "#111827",
      audio: "assets/audio/billie-party.mp3",
      description: "Quiet, emotional and reflective."
    },
    {
      id: 6,
      title: "After Hours",
      artist: "The Weeknd",
      mood: "night",
      colorA: "#7c3aed",
      colorB: "#db2777",
      audio: "assets/audio/after-hours.mp3",
      description: "Dark synth mood for late night listening."
    },
    {
      id: 7,
      title: "Nights",
      artist: "Frank Ocean",
      mood: "chill",
      colorA: "#0f766e",
      colorB: "#a3e635",
      audio: "assets/audio/nights.mp3",
      description: "Smooth, layered and calm."
    },
    {
      id: 8,
      title: "DNA.",
      artist: "Kendrick Lamar",
      mood: "hype",
      colorA: "#dc2626",
      colorB: "#facc15",
      audio: "assets/audio/dna.mp3",
      description: "Aggressive rhythm and confident energy."
    },
    {
      id: 9,
      title: "Deep Work",
      artist: "Lofi Focus",
      mood: "focus",
      colorA: "#2563eb",
      colorB: "#22d3ee",
      audio: "assets/audio/lofi.mp3",
      description: "Minimal ambient sound for concentration."
    },
    {
      id: 10,
      title: "TV",
      artist: "Billie Eilish",
      mood: "sad",
      colorA: "#475569",
      colorB: "#94a3b8",
      audio: "assets/audio/tv.mp3",
      description: "Low-key and thoughtful."
    },
    {
      id: 11,
      title: "Midnight City",
      artist: "M83",
      mood: "night",
      colorA: "#9333ea",
      colorB: "#06b6d4",
      audio: "assets/audio/midnight-city.mp3",
      description: "Big synths and city-night feeling."
    },
    {
      id: 12,
      title: "Pink + White",
      artist: "Frank Ocean",
      mood: "chill",
      colorA: "#fb7185",
      colorB: "#fde68a",
      audio: "assets/audio/pink-white.mp3",
      description: "Warm, clean and peaceful."
    }
  ];
  
  const MOOD_TEXT = {
    all: "All songs",
    chill: "Chill songs",
    hype: "High-energy songs",
    focus: "Focus songs",
    sad: "Reflective songs",
    night: "Night Drive songs"
  };
  
  const QUIZ_DESCRIPTIONS = {
    chill: "Du verkar behöva något mjukt och lugnt. Chill passar bäst.",
    hype: "Du verkar vilja ha mer energi. Hype är rätt mood.",
    focus: "Du verkar behöva koncentration och renare ljud. Focus passar bäst.",
    sad: "Du verkar vilja ha något mer emotionellt och reflekterande.",
    night: "Du verkar vilja ha mörkare, smidigare musik med nattkänsla."
  };