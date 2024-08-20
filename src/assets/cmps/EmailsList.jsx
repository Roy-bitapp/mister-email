import { EmailPreview } from "./EmailPreview";


export function EmailsList({ emails, isExpanded, updateEmail, checkFiltered, getEmailById }) {
  return (
    <div className={`emails-list-container ${isExpanded ? 'expanded' : ''}`}>
      <ul className="no-marker-list">
        {emails.map((email, index) =>
          <li
            key={email.id}
            className={index === 0 ? 'first-item' : ''}>
            <EmailPreview email={email} updateEmail={updateEmail} checkFiltered={checkFiltered}/>
          </li>)}
      </ul>
    </div>)
}