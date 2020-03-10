import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

function Navigation(props) {

  const [currentUser, setCurrentUser] = useState(props.getCurrentUser || {});

  //Changement d'avatar dans la nav mobile
  var pictoAvatar
  if (props.getCurrentUser) {
          if (props.getCurrentUser.userAvatar === "avatarMedusa") {
              pictoAvatar = "https://i.pinimg.com/originals/d9/da/ee/d9daee40abe5c7bc82c5b69874bd19b2.png"
          } else if (props.getCurrentUser.userAvatar === "avatarArmor") {
              pictoAvatar = "https://i.pinimg.com/originals/e8/9f/61/e89f61356b20acb2f65ab25e5191ce8b.png"
          } else if (props.getCurrentUser.userAvatar === "avatarWig") {
              pictoAvatar = "https://i.pinimg.com/originals/18/4a/a7/184aa79ab86d3a3a65a63a32c4fa1b33.png"
          }    
  } else {
      pictoAvatar = "../picto-key.png"
  } 

  //Changement de tooltip connexion/mon compte
    var account 
    if (currentUser.userAvatar) {
        account = "mon compte"
    } else {
        account = "connexion"
    }

  return (
        <div className="navigation-menu">
                <Link to='/results'>
                  <span className="nav-button"><img src="../picto-search.png" className="nav-picto" alt="picto" /><h6 className="picto-title">explorer</h6></span>
                </Link>
                <Link to='/basket'>
                  <span className="nav-button"><img src="../picto-bag.png" className="nav-picto" alt="picto"/><h6 className="picto-title">mon panier</h6></span>
                </Link>
                <Link to='/signin'>
                  <span className="nav-button"><img src={pictoAvatar} className="nav-picto" alt="picto"/><h6 className="picto-title">{account}</h6></span>
                </Link>
        </div>
    );
}

function mapStateToProps(state) {
  return { getCurrentUser: state.currentUser }
}

export default connect (
  mapStateToProps,
  null,
)(Navigation);