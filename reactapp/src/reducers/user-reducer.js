export default function(currentUser = false, action) {
    if(action.type === 'addUser') {
      console.log(action.toAdd)
      return action.toAdd;
    } else {
      return currentUser;
    }
    
}