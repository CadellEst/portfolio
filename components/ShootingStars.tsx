const shootingStarConfig = [
  { top: "12%", left: "8%", delay: "0s", duration: "8s" },
  { top: "24%", left: "32%", delay: "1.4s", duration: "7.5s" },
  { top: "18%", left: "70%", delay: "2.2s", duration: "9s" },
  { top: "40%", left: "12%", delay: "3.6s", duration: "8.5s" },
  { top: "52%", left: "42%", delay: "4.8s", duration: "7.8s" },
  { top: "60%", left: "78%", delay: "2.9s", duration: "8.8s" },
  { top: "70%", left: "16%", delay: "6s", duration: "7.2s" },
  { top: "82%", left: "48%", delay: "7.5s", duration: "9.4s" },
];

export function ShootingStars() {
  return (
    <div className="shooting-star-field">
      {shootingStarConfig.map((star, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
