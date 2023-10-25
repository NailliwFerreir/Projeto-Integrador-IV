export default function Arrow({
  className,
  width = "5.78538",
  height = "1.28564",
}) {
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9.18359"
        y="0.90918"
        width={width}
        height={height}
        transform="rotate(135 9.18359 0.90918)"
      />
      <rect
        x="5.08984"
        y="5"
        width={width}
        height={height}
        transform="rotate(-135 5.08984 5)"
      />
    </svg>
  );
}
