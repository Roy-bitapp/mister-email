import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { emailsService } from "../../services/emails-service";
import accountCircle from "/src/assets/imgs/emails/accountCircle.png";
import arrowBack from "/src/assets/imgs/emails/arrowBack.png";
import { useNavigate } from 'react-router-dom';



export function EmailDetails() {

  const navigate = useNavigate();
  const { emailId } = useParams();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (emailId) {
      getEmailFromService();
    }
  }, [emailId]);

  async function getEmailFromService() {
    console.log('Fetching email for id:', emailId);
    const details = await emailsService.getEmailById(emailId);
    setEmail(details);
  }

  function onArrowBackClick() {
    navigate('/email-index/');
  }

  if (!emailId) return <div>Invalid email ID</div>;
  if (!email) return <div>Loading Email...</div>;

  return (
    <div className="email-details-overlay">
      <img src={arrowBack} alt="" id="arrow-back" onClick={onArrowBackClick} />
      <h1 id="email-subject">{email.subject}</h1>
      <div className="email-from-container">
        <img src={accountCircle} alt="" id="account-circle-icon" />
        <p className="email-from">From: {email.from}</p>
      </div>
      <div className="email-body">
        <p> {email.body} </p>
      </div>
    </div>
  );
}
