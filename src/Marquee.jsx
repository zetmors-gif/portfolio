export const Marquee = ({ children, speed = 50, direction = 'left' }) => {
  return (
    <div className="marquee-container">
      <div
        className="marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};