export default function MarqueeBar() {
  const items = [
    "FRANKY DOE",
    "FULL STACK DEVELOPER",
    "AVAILABLE FOR HIRE",
    "LAGOS, NG",
    "REACT · NEXT.JS · NODE",
    "LET'S BUILD SOMETHING",
  ];

  // Double the items for seamless loop
  const track = [...items, ...items];

  return (
    <div className="marquee-bar" role="banner" aria-label="Scrolling info bar">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
