export default function(currentUser = false, action) {

  if(action.type === 'addUser') {
      return {...action.toAdd};

    } else if (action.type === 'changeAvatar'){
      var currentUserCopy = {...currentUser};
      currentUserCopy.userAvatar = action.avatar
      return currentUserCopy
      
    } else {
      return currentUser;
    }
    
}