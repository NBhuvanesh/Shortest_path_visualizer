
for(let i=2;i<COLUMNS;i++)
{
    for(let j=0;j<ROWS;j++)
    {
        grid.push(new Node(j,i))
    }
    
}


document.getElementById("addStart").addEventListener("click", function(event){
    addStart()
    event.preventDefault()
});
document.getElementById("addEnd").addEventListener("click", function(event){
    addEnd()
    event.preventDefault()
});
for(let i=0;i<grid.length;i++)
{
    console.log(grid[i].id)
}
document.getElementById("search").addEventListener("click", function(event){
    //console.log(start);
    x = dikstra(start,end);
   // console.log(getNeighbors(start));
   animatePath(getNodesInShortestPathOrder(end))
    
    event.preventDefault()
});
document.getElementById("addWall").addEventListener("click", function(event){
    addWall()
    event.preventDefault()
});