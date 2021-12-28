export function removeBlockMess( messages, blocks) {
    let newMess = [];
    for(let m of messages){
        if(blocks.indexOf(m.receivedId)==-1){
            newMess.push(m);
        }
    } 
    return newMess;
}
