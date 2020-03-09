export default function(visit = [], action) {
    if(action.type === 'addVisit') {
        var visitCopy =[...visit]
        visitCopy.push(action.visit)

        console.log('visitCopy :', visitCopy);
        return visitCopy;
    } else {
      return visit;
    }
    
}