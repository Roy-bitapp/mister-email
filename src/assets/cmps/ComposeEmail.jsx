import { useState } from 'react';
import { utilService } from '../../services/util.service';

export function ComposeEmail({closeComposeEmail, setEmailsList, emailsList }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newEmail =   { id: utilService.makeId(), 
      subject: subject, 
      body: body, 
      isRead: false, 
      isStarred: false, 
      sentAt: Date.now(), 
      removedAt: null,
      from: 'momo@momo.com', to: to }

      setEmailsList([...emailsList, newEmail])
      closeComposeEmail()
};

  return (
    <div className="new-message-container">
      <div className="compose-email-header">
        <span>New Message</span>
        <div className="header-actions">
          <span onClick={closeComposeEmail} className="minimize">_</span>
          <span onClick={closeComposeEmail} className="close">X</span>
        </div>
      </div>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="to"
            className="compose-top-input"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="text"
            id="subject"
            className="compose-top-input"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="text-area-container">
          <textarea
            name="body"
            className="text-area-content"
            placeholder="Compose your message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="email-actions">
          <button type="submit" className="send-button">Send</button>
        </div>
      </form>
    </div>
  );
}
