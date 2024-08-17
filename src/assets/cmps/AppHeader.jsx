import gmail  from "/src/assets/imgs/header/gmail.png"
import search  from "/src/assets/imgs/header/search.png"
import help  from "/src/assets/imgs/header/help.png"
import settings  from "/src/assets/imgs/header/settings.png"
import apps  from "/src/assets/imgs/header/apps.png"
import menu  from "/src/assets/imgs/header/menu.png"
import searchOptions  from "/src/assets/imgs/header/searchOptions.png"




export function AppHeader(){
  return (
  <div className="header">
    <div className="header-left">
      <div className="tooltip">
        <img className="menu-icon" src={menu} alt="" />
        <span className="tooltip-text"> Main menu </span>
      </div>
      <img className="gmail-image" src={gmail} alt="" />
    </div>

    <div className="header-middle">
      <span className="search-icond">
        <img className="input-icons" src={search} alt="" />
      </span>
      <input  type="text" placeholder="Search mail" className="header-input"></input>
      <img className="input-search-options" src={searchOptions} alt="" />
    </div>

    <div className="header-right">
      <img className="icons" src={help} alt="" />
      <img className="icons" src={settings} alt="" />
      <img className="icons" src={apps} alt="" />
    </div>
  </div>)
}