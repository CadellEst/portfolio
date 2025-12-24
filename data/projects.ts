export type Project = {
  title: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  image: string;
  fallbackImage?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Music Militia Media Hub",
    tagline: "Premium content hub and intake engine",
    description:
      "Custom Next.js build that curates the channel's latest drops and streamlines applications from new talent, lifting inbound conversions and session times.",
    liveUrl: "https://musicmilitia.co.uk/",
    stack: ["Next.js", "TypeScript", "Tailwind", "Keen Slider", "Axios"],
    image: "https://image.thum.io/get/width/1600/crop/1200/noanimate/https://musicmilitia.co.uk/",
    fallbackImage: "/assets/musicmilitia.png",
    highlight: "+30% lift in qualified submissions",
  },
  {
    title: "Studio Stream (Netflix feel)",
    tagline: "Authenticated streaming UX",
    description:
      "A responsive Netflix-inspired experience with onboarding, protected views, and cinematic hover states tuned for fast browsing.",
    liveUrl: "https://netflix-clone-silk-six.vercel.app/",
    repoUrl: "https://github.com/CadellEst/netflix-clone",
    stack: ["Next.js", "Tailwind", "Vite", "React"],
    image: "https://image.thum.io/get/width/1600/crop/1200/noanimate/https://netflix-clone-silk-six.vercel.app/",
    fallbackImage: "/assets/netflixClone-min.png",
    highlight: "Snappy hover-to-preview",
  },
  {
    title: "Rotech Vehicle Services",
    tagline: "Auto service landing + booking",
    description:
      "Lead-gen site for a UK vehicle services shop with clear service breakdowns, trust markers, and quick call-to-book flows.",
    liveUrl: "https://rotech-vehicle-services.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: "/assets/rotech-vehicle-services.png",
    fallbackImage: "/assets/rotech-vehicle-services.png",
    highlight: "Service-first CTA flow",
  },
  {
    title: "NFT Market Prototype",
    tagline: "Micro-interactions for collectibles",
    description:
      "Multi-page redesign of a static NFT promo into a dynamic marketplace experience with timers, skeleton states, and horizontal scrollers.",
    liveUrl: "https://cadell-internship-fes.vercel.app",
    repoUrl: "https://github.com/CadellEst/cadell-internship-fes",
    stack: ["Next.js", "React", "Tailwind"],
    image: "https://image.thum.io/get/width/1600/crop/1200/noanimate/https://cadell-internship-fes.vercel.app/",
    fallbackImage: "/assets/nftmp-min.png",
    highlight: "Micro-interaction rich",
  },
  {
    title: "The Windscreen Guy",
    tagline: "Auto glass repair lead funnel",
    description:
      "Single-page experience for a mobile windscreen repair service with upfront pricing cues, social proof, and click-to-call CTAs.",
    liveUrl: "https://thewindscreenguy.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: "/assets/the-windscreen-guy.png",
    fallbackImage: "/assets/the-windscreen-guy.png",
    highlight: "Quote-first layout",
  },
  {
    title: "Social Threads",
    tagline: "Twitter-esque social prototype",
    description:
      "Full interaction suite - auth, likes, replies - wrapped in a minimal UI to validate engagement flows rapidly.",
    liveUrl: "https://twitter-clone-fes-delta.vercel.app/",
    repoUrl: "https://github.com/CadellEst/twitter-clone-fes",
    stack: ["React", "Next.js", "Tailwind"],
    image: "https://image.thum.io/get/width/1600/crop/1200/noanimate/https://twitter-clone-fes-delta.vercel.app/",
    fallbackImage: "/assets/twitterClone-min.png",
    highlight: "Full interaction model",
  },
];
