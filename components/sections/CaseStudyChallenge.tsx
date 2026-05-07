export default function CaseStudyChallenge({ study }: { study: any }) {
  return (
    <section className="case-section-soft">
      <div className="container challenge-grid">
        <div className="challenge-copy">
          <h2>{study.challengeTitle}</h2>
          <div className="section-underline" />
          {study.challengeBody.map((para: string) => (
            <p key={para}>{para}</p>
          ))}
          <ul>
            {study.challengePoints.map((point: string) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="challenge-visual">
          <div className="challenge-image" />
        </div>
      </div>
    </section>
  );
}
