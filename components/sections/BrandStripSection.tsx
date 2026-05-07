const letters = [
  { letter: "C", word: "CLOUD" },
  { letter: "U", word: "UNIVERSAL AI" },
  { letter: "D", word: "DIGITAL" },
  { letter: "A", word: "AUGMENTED" },
  { letter: "I", word: "INNOVATIVE" },
  { letter: "Q", word: "QUALITY" },
];

export default function BrandStripSection() {
  return (
    <section className="brand-strip-section">
      <div className="container brand-strip">
        {letters.map((item) => (
          <div key={item.letter} className="brand-strip-item">
            <span className="brand-letter">{item.letter}</span>
            <span className="brand-word">{item.word}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
