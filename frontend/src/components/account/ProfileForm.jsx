import "./ProfileForm.css";

export default function ProfileForm() {
  return (
    <section className="profileform">
      <header className="profileform-header">
        <div className="profile-avatar" aria-hidden="true">
          AJ
        </div>
        <div>
          <p className="profileform-eyebrow">Account</p>
          <h2>Profile Details</h2>
          <p className="profile-subtitle">Keep your contact information updated.</p>
        </div>
      </header>

      <form className="profileform-grid">
        <label>
          First Name
          <input type="text" value="Alex" readOnly />
        </label>

        <label>
          Last Name
          <input type="text" value="Johnson" readOnly />
        </label>

        <label className="span-2">
          Email Address
          <input type="email" value="alex.johnson@example.com" readOnly />
        </label>

        <label>
          Phone Number
          <input type="tel" value="+1 (415) 555-0127" readOnly />
        </label>

        <label>
          Date of Birth
          <input type="text" value="Aug 14, 1998" readOnly />
        </label>

        <label className="span-2">
          Bio
          <textarea rows="4" readOnly defaultValue="Shopping for home essentials and smart gadgets." />
        </label>

        <div className="profile-actions span-2">
          <button type="button" className="secondary">
            Cancel
          </button>
          <button type="submit" className="primary">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}
