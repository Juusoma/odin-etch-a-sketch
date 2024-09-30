const etchContainer = document.querySelector(".etch-container");
etchContainer.addEventListener("mouseover", onEtchHover);
etchContainer.addEventListener("mouseover", () => console.log("mouse enter"));

const gridSize = 512;
let nodeWidth = 0;
etchContainer.style["width"] = gridSize + "px";
etchContainer.style["height"] = gridSize + "px";

function clearGrid(){
    etchContainer.innerHTML = "";
}

function onEtchHover(e){
    if(e.target.className === "etch-node"){
        onNodeHover(e.target);
    }
}

function onNodeHover(node){
    const etchColor = "#0cc"
    node.style.backgroundColor = etchColor;
}

function createGrid(){
    clearGrid();

    const nodesPerLine = 8;
    nodeSize = gridSize / nodesPerLine;

    function addNode(){
        const newNode = document.createElement("div");
        newNode.className = "etch-node";
        newNode.style.width = nodeSize + "px";
        newNode.style.height = nodeSize + "px";
        etchContainer.appendChild(newNode);
    }

    for(let x = 0; x < nodesPerLine; x++){
        for(let y = 0; y < nodesPerLine; y++){
            addNode();
        }
    }
}

createGrid();