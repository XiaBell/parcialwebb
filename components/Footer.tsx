export default function Footer({ legalText }: { legalText: string }) {
  return (
    <footer
      className="py-6 text-center text-sm"
      style={{ backgroundColor: "#BBCCBB" }}
    >
      <p>{legalText}</p>
    </footer>
  );
}
