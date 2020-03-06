export default function(currentUser = {}, action) {
    if(action.type === 'addUser') {
        console.log('action.toAdd :', action.toAdd);
      return action.toAdd;
    } else {
      return currentUser;
    }
    
}