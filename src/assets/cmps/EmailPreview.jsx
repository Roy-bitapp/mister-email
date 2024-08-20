import { useState } from "react";
import checkBox from "/src/assets/imgs/emails/checkBox.png";
import starYellow from "/src/assets/imgs/emails/starYellow.png";
import star from "/src/assets/imgs/sidebar/star.png";
import checkedBox from "/src/assets/imgs/emails/checkedBox.png";
import trashExpanded from "/src/assets/imgs/sidebar/trashExpanded.png";
import markAsRead from "/src/assets/imgs/emails/markAsRead.png";
import read from "/src/assets/imgs/emails/read.png";
import restoreFromTrash from "/src/assets/imgs/emails/restoreFromTrash.png";
import { useNavigate } from 'react-router-dom';


export function EmailPreview({ email, updateEmail, checkFiltered}) {
  const navigate = useNavigate();
  const [checkBoxClicked, setCheckBox] = useState(false);

  function onMarkReadClicked(event) {
    event.stopPropagation();
    const updatedEmail = { ...email, isRead: !email.isRead };
    updateEmail(updatedEmail);
  }

  function onStarClick(event) {
    event.stopPropagation();
    const updatedEmail = { ...email, isStarred: !email.isStarred };
    updateEmail(updatedEmail);
  }

  function onRowClicked() {
    const updatedEmail = { ...email, isRead: !email.isRead };
    updateEmail(updatedEmail);
    navigate(`/email-index/${email.id}`);
  }

  function onTrashClick(event){
    event.stopPropagation();
    const updatedRemovedAt = email.removedAt ? null : new Date().toLocaleString()
    const updatedEmail = { ...email, removedAt: updatedRemovedAt };
    updateEmail(updatedEmail);
  }

  function setClassName(){
    const isFiltered = checkFiltered(email) ? 'filtered' : ''
    const isRead = email.isRead ? 'read' : ''
    return `email-row ${isRead} ${isFiltered}`
  }

  return (
    <div className={setClassName()} onClick={onRowClicked}>
      <div className="email-preview-icons">
        <img
          onClick={(event) => { event.stopPropagation(); setCheckBox(prev => !prev); }}
          className='email-preview-icon'
          src={checkBoxClicked ? checkedBox : checkBox}
          alt=""
        />
        <img
          onClick={onStarClick}
          className='email-preview-icon'
          src={email.isStarred ? starYellow : star}
          alt=""
        />
      </div>

      <div className="email-preview-text">
        <div className="email from">
          {email.from}
        </div>
        <div className="email subject">
          <strong>{email.subject}</strong>
        </div>
        <div className="email body">
          {email.body}
        </div>
        </div>
        <div className="right-side-icons">
          <img
            src={ email.removedAt? restoreFromTrash : trashExpanded}
            alt=""
            className="delete-icon"
            onClick={onTrashClick}
          />
          <img
            src={email.isRead ? read : markAsRead}
            alt=""
            className="delete-icon"
            onClick={onMarkReadClicked}
          />
        </div>
        <div className="email sentAt">
          {new Date(email.sentAt).toLocaleString()}
        </div>
    </div>
  )
}
