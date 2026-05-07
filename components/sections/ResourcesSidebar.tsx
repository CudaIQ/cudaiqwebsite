const topics = [
  ["AI/ML", 24],
  ["IoT", 18],
  ["Infra-Tech & Defense", 12],
  ["SMB Transformation", 31],
  ["Rental Platforms", 9],
  ["AR/VR/MR", 7],
];

export default function ResourcesSidebar() {
  return (
    <aside className="resources-sidebar">
      <div className="sidebar-block">
        <h3>TOPIC CLUSTERS</h3>
        <ul className="topic-list">
          {topics.map(([label, count]) => (
            <li key={label}>
              <span>{label}</span>
              <strong>{count as number}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-block">
        <h3>AUDIENCE</h3>
        <div className="chip-group">
          <span className="audience-chip">SMBs</span>
          <span className="audience-chip active">Infra-Tech</span>
          <span className="audience-chip">Platform Builders</span>
        </div>
      </div>

      <div className="sidebar-block">
        <h3>CONTENT TYPE</h3>
        <label className="check-item">
          <input type="checkbox" /> Awareness
        </label>
        <label className="check-item">
          <input type="checkbox" defaultChecked /> Evaluation
        </label>
        <label className="check-item">
          <input type="checkbox" /> How-to
        </label>
      </div>
    </aside>
  );
}