export default function ContactRequestFormSection() {
  return (
    <aside className="contact-form-card">
      <h2>System Configuration Request</h2>
      <p>Provide your operational parameters to initiate the sequence.</p>

      <form className="contact-form-grid">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input className="full-width" type="email" placeholder="Work Email Address" />
        <input className="full-width" type="text" placeholder="Company / Organization" />
        <select>
          <option>Select Sector</option>
          <option>SaaS</option>
          <option>Manufacturing</option>
          <option>Defense</option>
          <option>Logistics</option>
        </select>
        <select>
          <option>Select Region</option>
          <option>India</option>
          <option>US</option>
          <option>UAE</option>
          <option>EU</option>
        </select>

        <div className="full-width timeline-selector">
          <span>DEPLOYMENT TIMELINE</span>
          <div className="timeline-pills">
            <button type="button" className="timeline-pill active">Immediate</button>
            <button type="button" className="timeline-pill">Next Qtr</button>
            <button type="button" className="timeline-pill">Planning</button>
          </div>
        </div>

        <button type="submit" className="primary-button full-width">
          Initialize Scheduler →
        </button>
      </form>

      <p className="form-note">🔒 Encrypted transmission. No data retention without consent.</p>
    </aside>
  );
}