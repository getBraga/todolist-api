const button = document.querySelector(".button-abrir");

async function getUrl(url) {
  const response = await fetch(url);
  return await response.json();
}
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
}

function abrirDiv() {
  listTodo();
  postData("http://localhost:3000/todolist/", {
    title: "",
    priority: "",
    description: "",
    color: "#37cc41",
    label: "",
  });
}
button.addEventListener("click", abrirDiv);

async function deleteData(id) {
  // e.preventDefault();
  // console.log(e);
  const response = await fetch(`http://localhost:3000/todolist/${id}`, {
    method: "DELETE",
  });
}

async function listTodo() {
  const todos = await getUrl("http://localhost:3000/todolist");
  const cores = await getUrl("http://localhost:3000/cores");
  const app = document.querySelector("#app");
  app.innerHTML = `
  ${todos.map(
    (todo) =>
      `<div class="criar-div" data-id="${todo.id}"  style= "background: ${
        todo.color
      } ">
     
      <div class="fechar">
        <button onclick="deleteData(${todo.id})">X</button>
      </div>
      <div class="cor-etiqueta" etiqueta-id="${todo.id}">
        
        <label>Cor:</label> 
        <select name="cores" id="cores" data-id=${
          todo.id
        }  onchange="mudarTudo(${todo.id})" value=${todo.color}>
        ${cores.map(
          (cor) =>
            `<option value="${cor.value}" ${
              todo.color === cor.value ? "selected" : ""
            } data-id=${todo.id} >${cor.label}</option>`
        )}
        </select>
      </div>
      <input data-id="${todo.id}" type="text" value="${
        todo.title
      }"class="titulo input" placeholder = 'Titulo'>
      <input data-id="${todo.id}"  type="number" value="${
        todo.priority
      }" class="numero input"  placeholder ='Prioridade'>
      <textarea data-id="${
        todo.id
      }"  class="textarea input" placeholder= 'Descrição'>${
        todo.description
      }</textarea>
      <button class="button-confirmar"onclick="mudarTudo(${
        todo.id
      })">Confirmar</button >
    </div >

    `
  )}

`;
}
listTodo();
async function ordenar(value) {
  const url = await getUrl(
    "http://localhost:3000/todolist?_sort=title&_order=asc"
  );
  console.log(url);
}

async function putData(id, data = {}) {
  // e.preventDefault();
  // console.log(e);
  const response = await fetch(`http://localhost:3000/todolist/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
}

async function mudarTudo(id) {
  const title = document.querySelector(`.titulo[data-id="${id}"]`).value.trim();
  const priority = document.querySelector(`.numero[data-id="${id}"]`).value;
  const description = document
    .querySelector(`.textarea[data-id="${id}"]`)
    .value.trim();
  const color = document.querySelector(`#cores[data-id="${id}"]`).value;
  putData(id, {
    title,
    priority,
    description,
    color,
  });
}

async function putOrdenar(data = {}) {
  // e.preventDefault();
  // console.log(e);
  const response = await fetch(
    `http://localhost:3000/todolist?_sort=title&_order=asc"`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );
}

