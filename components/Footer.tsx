export default function Footer({ legalText }: { legalText: string }) {
  return (
    <footer style={{ backgroundColor: "#BBCCBB" }} className="py-4 px-6 text-sm">
      <p>{legalText}</p>
    </footer>
  );
}
