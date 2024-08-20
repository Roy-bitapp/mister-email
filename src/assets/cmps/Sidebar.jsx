import compose from "/src/assets/imgs/sidebar/compose.png";
import draft from "/src/assets/imgs/sidebar/draft.png";
import inbox from "/src/assets/imgs/sidebar/inbox.png";
import sent from "/src/assets/imgs/sidebar/sent.png";
import sentExpanded from "/src/assets/imgs/sidebar/sentExpanded.png";
import star from "/src/assets/imgs/sidebar/star.png";
import trash from "/src/assets/imgs/sidebar/trash.png";
import trashExpanded from "/src/assets/imgs/sidebar/trashExpanded.png";




export function Sidebar({ expandSidebar, isExpanded, setFilterBy, filterBy, onComposeEmailClicked }) {

  function onInboxClick() {
    const updatedFilterBy = { ...filterBy, status: 'inbox' };
    setFilterBy(updatedFilterBy)
  }

  function onStarredClick() {
    console.log("hi")
    const updatedFilterBy = { ...filterBy, status: 'star'};
    setFilterBy(updatedFilterBy)
  }

  function onSentClick() {
    const updatedFilterBy = { ...filterBy, status: 'sent'};
    setFilterBy(updatedFilterBy)
  }

  function onTrashClick() {
    const updatedFilterBy = { ...filterBy, status: 'trash'};
    setFilterBy(updatedFilterBy)
  }

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={expandSidebar}
      onMouseLeave={expandSidebar}>

      <button
        className={`compose-button ${isExpanded ? 'expanded' : ''}`} onClick={onComposeEmailClicked} >
        <img className='compose-icon' src={compose} alt="" />
        {isExpanded && <div className="compose-button-text">Compose</div>}
      </button>

      <div  onClick={ onInboxClick }  className="sidebar-item">
        <img className="menu-icon" src={inbox} alt="" />
        {isExpanded && <div className="sidebar-item-text">Inbox</div>}
      </div>

      <div onClick={ onStarredClick } className="sidebar-item">
        <img className="menu-icon" src={star} alt="" />
        {isExpanded && <div className="sidebar-item-text">Starred</div>}

      </div>
      <div onClick={ onSentClick } className="sidebar-item">
        <img className="menu-icon" src={isExpanded ? sentExpanded : sent} alt="" />
        {isExpanded && <div className="sidebar-item-text"  >Sent</div>}

      </div>
      <div className="sidebar-item">
        <img className="menu-icon" src={draft} alt="" />
        {isExpanded && <div className="sidebar-item-text">Drafts</div>}

      </div>
      <div  onClick={ onTrashClick }  className="sidebar-item">
        <img className="menu-icon" src={isExpanded ? trashExpanded : trash} alt="" />
        {isExpanded && <div className="sidebar-item-text">Trash</div>}
      </div>
    </div>
  )
}