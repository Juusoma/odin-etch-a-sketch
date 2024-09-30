const etchContainer = document.querySelector(".etch-container");
etchContainer.addEventListener("mouseover", onEtchHover);
etchContainer.addEventListener("mouseover", () => console.log("mouse enter"));
function clearGrid(){
    etchContainer.innerHTML = "";
}

function adjustGridMaxWidth(gridWidth){
    const nodeWidth = 32;
    etchContainer.style["max-width"] = gridWidth * nodeWidth + "px";
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

    const gridWidth = 16;
    const gridHeight = 16;

    function addNode(){
        const newNode = document.createElement("div");
        newNode.className = "etch-node";
        etchContainer.appendChild(newNode);
    }

    for(let x = 0; x < gridWidth; x++){
        for(let y = 0; y < gridHeight; y++){
            addNode();
        }
    }

    adjustGridMaxWidth(gridWidth);
}

createGrid();