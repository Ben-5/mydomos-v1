export default function(currentUser = false, action) {
    if(action.type === 'addUser') {
      return action.toAdd;
    } else {
      return currentUser;
    }
    
}