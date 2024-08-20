import { useEffect, useState } from "react";
import { emailsService } from "../services/emails-service";
import { EmailsList } from "../assets/cmps/EmailsList";
import { Sidebar } from "../assets/cmps/Sidebar";
import { AppHeader } from "../assets/cmps/AppHeader";
import { OrderBy } from "../assets/cmps/OrderBy";
import { Outlet, useNavigate } from "react-router-dom";
import { ComposeEmail } from "../assets/cmps/ComposeEmail";

export function EmailIndex() {
  const [emailsList, setEmailsList] = useState(null);
  const [isExpanded, setIsExpanded] = useState(null);
  const [isComposeEmailOpen, setIsComposeEmailOpen] = useState(false);
  const [filterBy, setFilterBy] = useState({ status: 'inbox', txt: '', isRead: false });
  const navigate = useNavigate();

  const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

  useEffect(() => {
    loadEmails()
  }, [])

  useEffect(() => {
    navigate('/email-index/');
  }, [filterBy])

  async function loadEmails(filterBy, loggedinUser) {
    const emails = await emailsService.getEmails(filterBy, loggedinUser)
    setEmailsList(emails)
  }

  function expandSidebar() {
    setIsExpanded(isExpanded => !isExpanded);
  };

  function onComposeEmailClicked() {
    setIsComposeEmailOpen(true)
  }

  function closeComposeEmail() {
    setIsComposeEmailOpen(false)
  }

  function orderByDate(isAscending){
    const sortedEmails = emailsList.sort((a, b) => isAscending ? a.sentAt - b.sentAt : b.sentAt - a.sentAt)
    setEmailsList([...sortedEmails])
  }

  function orderBySubject(isAscending) {
    const sortedEmails = emailsList.sort((a, b) => {
      if (a.subject < b.subject) return isAscending ? -1 : 1;
      if (a.subject > b.subject) return isAscending ? 1 : -1;
      return 0;
    });
    setEmailsList([...sortedEmails]);
  }

  if (!emailsList) return <div>Loading emails...</div>
  return (
    <div className="emails-index-section">
      <section className="header-section">
        <AppHeader isExpanded={isExpanded} setIsExpanded={setIsExpanded} getFilteredEmailsByText={getFilteredEmailsByText} />
      </section>
      <section className="order-by-section">
        <OrderBy isExpanded={isExpanded} orderByDate={orderByDate} orderBySubject={orderBySubject} />
      </section>
      <Outlet />
      <section className="sidebar-section">
        <Sidebar
          expandSidebar={expandSidebar}
          isExpanded={isExpanded}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
          onComposeEmailClicked={onComposeEmailClicked}
        />
      </section>
      <EmailsList emails={emailsList} isExpanded={isExpanded} updateEmail={updateEmail} checkFiltered={checkFiltered} />
      {isComposeEmailOpen && <ComposeEmail closeComposeEmail={closeComposeEmail} setEmailsList={setEmailsList} emailsList={emailsList} />}
    </div>
  )

  async function updateEmail(changedEmail) {
    let newEmailsList = emailsList.map(email =>
      changedEmail.id === email.id ? { ...email, ...changedEmail } : email
    );
    const saved = await emailsService.save(newEmailsList);
    if (saved)
      setEmailsList([...newEmailsList]);
  }

  function checkFiltered(email) {
    return emailsService.isFiltered(email, filterBy, loggedinUser)
  }

  async function getFilteredEmailsByText(text){
    console.log(text)
    const filteredEmails = await emailsService.getEmailsByText(emailsList, text)
    setEmailsList([...filteredEmails])
  }
}