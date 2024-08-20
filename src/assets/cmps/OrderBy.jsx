import { useState } from "react";
import arrowDown from "/src/assets/imgs/emails/arrowDown.png";
import arrowUp from "/src/assets/imgs/emails/arrowUp.png";



export function OrderBy({ isExpanded, orderByDate, orderBySubject}) {

  const [orderByDateActivated, setOrderByDate] = useState(false);
  const [orderBySubjectActivated, setOrderBySubject] = useState(false);

  function toggleFilter(orderByType) {
    orderByType === 'date' ? setOrderByDate(orderBy => !orderBy) : setOrderBySubject(orderBy => !orderBy)
  }

  function onOrderByDateClicked(){
    toggleFilter('date')
    orderByDate(orderByDateActivated)
  }

  function onOrderBySubjectClicked(){
    toggleFilter('subject')
    orderBySubject(orderBySubjectActivated)
  }

  return (
    <div className={`filters-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="date filter" onClick={onOrderByDateClicked}>
        {!orderByDateActivated ? <img className="arrow-icon" src={arrowDown} alt="" /> : <img className="arrow-icon" src={arrowUp} alt="" />}
        Date </div>
        <div className="date filter" onClick={onOrderBySubjectClicked}>
        {!orderBySubjectActivated ? <img className="arrow-icon" src={arrowDown} alt="" /> : <img className="arrow-icon" src={arrowUp} alt="" />}
        Subject </div>
    </div>
  )
}