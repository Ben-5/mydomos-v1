export default function(visit = [], action) {
    if(action.type === 'addVisit') {
        var visitCopy =[...visit]
        visitCopy.push(action.visit)
        return visitCopy;
    } else {
      return visit;
    }
    
}