
nodeCount = 0
infinity = 9999;
grid = [];
var start,end = null;
const ROWS = 42;
const COLUMNS = 20
NODES = 756
time = 0
const SPEED = 6
flowColor = "rgb(0, 229, 255)"
flowBorder = "rgba(4, 184, 204)"
table = document.getElementById("table");
wallColor = "#59410c"
function Node(x,y)
{
    this.distance = infinity;
    this.isWall = false;
    this.isVisited = false;
    this.index = nodeCount;
    this.x = x;
    this.y = y;
    this.id = "node"+nodeCount
    this.prevNode = null;
    //if(nodeCount>=0 &&nodeCount )
    node = document.createElement("div");
    node.id = "node"+nodeCount
    nodeCount++
    node.className = "node";
    node.style.left = (x*30)+"px"
    node.style.top = (y*30)+"px"
    table.appendChild(node);
}
function addStart()
{
    for(let i=0;i<NODES;i++)
{
    x = document.getElementById("node"+i)

    x.onmouseover =function() {mouseOver("node"+i)};
    x.onmouseout = function() {mouseOut("node"+i)};
    x.onclick = function(){onMouseclick("node"+i,i)};
}
function mouseOver(x)
{
    document.getElementById(x).style.borderColor = "orange";
    
}
function mouseOut(x)
{
    document.getElementById(x).style.borderColor = wallColor

}
function onMouseclick(x,i)
{
    if(start!=null)
    {
        document.getElementById(start.id).style.backgroundColor = "white"
        startpos = -1;
    }
    start = grid[i];
    document.getElementById(x).style.backgroundColor = "orange";
   
}
}

function addEnd()
{
    for(let i=0;i<NODES;i++)
{
    x = document.getElementById("node"+i)

    x.onmouseover =function() {mouseOver("node"+i)};
    x.onmouseout = function() {mouseOut("node"+i)};
    x.onclick = function(){onMouseclick("node"+i,i)};
}
function mouseOver(x)
{
    document.getElementById(x).style.borderColor = "black";
    
}
function mouseOut(x)
{
    document.getElementById(x).style.borderColor = wallColor

}
function onMouseclick(x,i)
{
    if(end!=null)
    {
        document.getElementById(end.id).style.backgroundColor = "white"
    }
    end = grid[i];
    document.getElementById(x).style.backgroundColor = "black";
   
}
}
function addWall()
{
    for(let i=0;i<NODES;i++)
{
    x = document.getElementById("node"+i)

   
    x.onclick = function(){
        wall.push(i)
        onMouseclick("node"+i)
        document.getElementById("node"+i).onmouseover =function() {mouseOver("node"+i)};
    };
}
function mouseOver(x)
{
    document.getElementById(x).style.backgroundColor = wallColor;
    
}
function onMouseclick(x)
{
    document.getElementById(x).style.backgroundColor = wallColor;
   
}
}
function dikstra(startNode,endNode)
{
    //console.log("Hello");
    visitedNodesInOrder = [];
    startNode.distance = 0;
    unVisitedNodes = grid.slice();
    //console.log(unVisitedNodes);
    
    while(unVisitedNodes.length>0)
    {
        console.log("Hello2");
        sortByDistance(unVisitedNodes);
        //console.log("Sorted Nodes");
        
        
        
        closestNode = unVisitedNodes.shift();
        if (closestNode.isWall) continue;
        if(closestNode.distance==infinity)
        {
            return false;
        }
        closestNode.isVisited = true;
        setTimeout(chageColor,SPEED*time,closestNode);
        time++
        visitedNodesInOrder.push(closestNode)
        //console.log(visitedNodesInOrder)
        if(closestNode==endNode)
        {
            return visitedNodesInOrder;
        }
        updateNeighbors(closestNode);
    }
}
function sortByDistance(unVisitedNodes)
{ 
    unVisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}
function updateNeighbors(node)
{
    neighbors = getNeighbors(node)
    for(const neighbor of neighbors)
    {
        neighbor.distance = node.distance+1;
        neighbor.prevNode = node;
        // setTimeout(chageNeiColor,SPEED*time,neighbor);
        // time++
    }
}
function getNeighbors(node)
{
    console.log(node);
    neighbors = [];
    if(node.x>0)
    { 
        left = grid[(node.index)-1]
        if(!(left.isVisited)) neighbors.push(left)
    }
    if(node.x<ROWS-1)
    {
        right = grid[(node.index)+1]
        if(!(right.isVisited)) neighbors.push(right)
    }
    if(node.y>2)
    {
        up = grid[(node.index)-ROWS];
        if(!(up.isVisited)) neighbors.push(up)
    }
    if(node.y<COLUMNS-1)
    {
        down = grid[(node.index)+ROWS];
        if(!(down.isVisited)) neighbors.push(down)
    }
    // if(isDefined(left)) 
    //     if(!(left.isVisited)) neighbors.push(left)
    // if(isDefined(right)) 
    //     if(!(right.isVisited)) neighbors.push(right)
    // if(isDefined(up))
    //      if(!(up.isVisited)) neighbors.push(up)
    // if(isDefined(down)) 
    //     if(!(down.isVisited)) neighbors.push(down)
    return neighbors;
}
function animateNodes(node)
{

       

}
function chageColor(node)
{
    if(node!=start && node!=end)
    document.getElementById(node.id).style.backgroundColor=flowColor
    document.getElementById(node.id).style.borderColor=flowBorder
}
function isDefined(t)
{
    if(t === undefined)
    {
        return false
    }
    else if(node.x<0) return false;
    else if(node.y<2) return false;
    else if(node.x>=ROWS) return false;
    else if(node.y>=COLUMNS) return false;

    return true
}
function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.prevNode;
    }
    return nodesInShortestPathOrder;
  }
  function animatePath(nodes)
{
    for(let i=0;i<nodes.length;i++)
    {
        setTimeout(chageColour,SPEED*time+10,nodes[i]);
        time++
    }
    //setTimeout(alert,SPEED*time,"The Cost of Travel is"+((nodes.length)-2)+"cells")
    //alert("The Cost of Travel is"+((nodes.length)-2)+" cells")
}
function chageColour(node)
{
    if(node!=start && node!=end)
    document.getElementById(node.id).style.backgroundColor="yellow"
}
function addWall()
{
    for(let i=0;i<NODES;i++)
{
    x = document.getElementById(grid[i].id)

   
    x.onclick = function(){
        onMouseclick(grid[i])
        document.getElementById("node"+i).onmouseover =function() {mouseOver(grid[i])};
    };
}
function mouseOver(x)
{
    document.getElementById(x.id).style.backgroundColor = wallColor;
    
}
function onMouseclick(x)
{
    document.getElementById(x.id).style.backgroundColor = wallColor;
    x.isWall = true;
   
}
}
function chageNeiColor(node)
{
    if(node!=start && node!=end)
    document.getElementById(node.id).style.backgroundColor = "#94dff7";
}