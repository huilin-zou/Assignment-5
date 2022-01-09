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

//click cell and changes color to selcetd one
const colorIt = (e) => {
  let options = document.getElementsByTagName("option");

  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      e.target.style.backgroundColor = options[i].value;
      break;
    }
  }
};

box = document.querySelectorAll(".box");

//click event
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", colorIt);
}
