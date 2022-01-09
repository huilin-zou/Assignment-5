//add rows

const a = document.querySelector(".addRowBtn");
const content = document.querySelector(".gridContainer");
a.addEventListener("click", function () {
  const newRow = document.createElement("div");
  newRow.setAttribute("class", "row");
  //if grid is empty
  if (content.children.length == 0) {
    const b = document.createElement("div");
    b.setAttribute("class", "col-sm border border-dark box white");
    newRow.appendChild(b);
  } else {
    const numOfCol = document.querySelector(".row").querySelectorAll(".box");

    for (let i = 0; i < numOfCol.length; i++) {
      const b = document.createElement("div");
      b.setAttribute("class", "col-sm border border-dark box white");
      newRow.appendChild(b);
    }
  }

  content.appendChild(newRow);
});

//delete rows
const delRow = document.querySelector(".delRowBtn");

delRow.addEventListener("click", function () {
  if (content.children.length == 1) {
    alert("error");
    return;
  }
  let lastRow = content.children.length - 1;
  content.removeChild(content.children[lastRow]);
});

//add columns
const addCol = document.querySelector(".addColBtn");
addCol.addEventListener("click", function () {
  for (let i = 0; i < content.children.length; i++) {
    const newCol = document.createElement("div");
    newCol.setAttribute("class", "col-sm border border-dark box white");
    content.children[i].appendChild(newCol);
  }
});

//delete columns
const delCol = document.querySelector(".delColBtn");
delCol.addEventListener("click", function () {
  let numOfRow = content.children.length;
  if (content.children[numOfRow - 1].children.length == 1) {
    alert("error");
    return;
  }
  let lastCol = content.children[numOfRow - 1].children.length - 1;
  for (let i = 0; i < numOfRow; i++) {
    let row = content.children[i];
    row.removeChild(row.children[lastCol]);
  }
});

let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", clickToChangeColor);
}

//click cell and changes color to selcetd one
function clickToChangeColor() {
  let givingColor = document.querySelectorAll(".box");
  const r = document.querySelector("#clickToChangeColor");

  for (let i = 0; i < givingColor.length; i++) {
    givingColor[i].addEventListener("click", function (e) {
      e.target.style.backgroundColor = r.options[r.selectedIndex].value;
    });
  }
}

//fill all uncolored cells with the currently selected color
whiteBoxColor.addEventListener("click", () => {
  let options = document.querySelector("#white-box-color");
  let box = document.querySelectorAll(".box");

  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      for (let j = 0; j < box.length; j++) {
        if (
          box[j].style.backgroundColor != "blue" &&
          box[j].style.backgroundColor != "yellow" &&
          box[j].style.backgroundColor != "red"
        ) {
          box[j].style.backgroundColor = options[i].value;
        }
      }
      break;
    }
  }
});

//fill all cells with the currently selected color
let fillAllBtn = document.querySelector("#fillAll");
fillAllBtn.addEventListener("click", function () {
  let op = document.querySelector("#fillAll-select");
  let box = document.querySelectorAll(".box");

  for (let i = 0; i < op.length; i++) {
    if (op[i].selected) {
      for (let j = 0; j < box.length; j++) {
        box[j].style.backgroundColor = op[i].value;
      }
    }
  }
});

//click and hold (mouseover) from a single cell (start) to a different cell (end) such that
// all affected/hovered-over cells from start to end change to the currently selected color
function mouseoverChangeColor() {
  let color = document.querySelectorAll(".box");
  const drag = document.querySelector("#drag");

  function mouseoverFunction(selectedColor) {
    selectedColor.target.style.backgroundColor =
      drag.options[drag.selectedIndex].value;
  }

  content.addEventListener("mousedown", function () {
    for (let i = 0; i < color.length; i++) {
      color[i].addEventListener("mouseover", mouseoverFunction);
    }
  });

  content.addEventListener("mouseup", function () {
    for (let i = 0; i < color.length; i++) {
      color[i].removeEventListener("mouseover", mouseoverFunction);
    }
  });
}
mouseoverChangeColor();
