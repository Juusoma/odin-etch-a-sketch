const etchContainer = document.querySelector(".etch-container");
etchContainer.addEventListener("mouseover", onEtchHover);

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

function createGrid(nodesPerLine){
    clearGrid();

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

createGrid(16);

const gridSizeSelectionButtons = document.querySelector(".grid-size-button-container");
gridSizeSelectionButtons.addEventListener("click", (e) => {
    let desiredGridSize = 0;
    switch(e.target.id){
        case "grid-size-8":
            desiredGridSize = 8;
            break;
        case "grid-size-16":
            desiredGridSize = 16;
            break;
        case "grid-size-32":
            desiredGridSize = 32;
            break;
        case "grid-size-64":
            desiredGridSize = 64;
            break;
        default: 
            desiredGridSize = 8;
            break;
    }

    createGrid(desiredGridSize);
});