// info usario

const username = document.getElementById("username");
username.addEventListener("click", () => {
  const nombre = prompt("Por favor ingrese su nombre");
  if (nombre) {
    localStorage.setItem("Usuario", nombre);
    username.textContent = ` ${nombre}`;
  }
});
const nombreGuardado = localStorage.getItem("Usuario");
if (nombreGuardado) {
  username.textContent = ` ${nombreGuardado}`;
}
console.log(`Bienvenido ${username.textContent}`);

//info Front Height mediante prompt

var FrontHeight = document.getElementById("FrontHeight");
FrontHeight.textContent = prompt("Ingresar Front Height > 50.0 mm");

while (FrontHeight.textContent < 50) {
  FrontHeight.textContent = prompt(
    "Por Favor ingresar Front Height > 50.0 mm "
  );
}
var FrontHeight_num = parseFloat(FrontHeight.textContent);
console.log(`La altura adelante es de ${FrontHeight.textContent} mm`);

//info Rear Height mediante prompt

var RearHeight = document.getElementById("RearHeight");
RearHeight.textContent = prompt("Ingresar Rear Height > 50.0 mm");

while (RearHeight.textContent < 50) {
  RearHeight.textContent = prompt("Por favor ingresar Front Height > 50.0 mm");
}
var RearHeight_num = parseFloat(RearHeight.textContent);
console.log(`La altura atras es de ${RearHeight.textContent} mm`);

// calculo primitivo balance auto

function CalculadoraBalance(a, b) {
  return (parseFloat(a) + parseFloat(b)) / 2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);

// funciones botones Front Heigt low/up segun botones

function lowFH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num - 0.1).toFixed(1);
  FrontHeight.textContent = new_FH;
  console.log(new_FH);

  new_FH_num = parseFloat(new_FH);
  if (new_FH_num < 50) {
    new_FH = 50;
    FrontHeight.textContent = new_FH;
    console.log("LA ALTURA DELANTERA DEL AUTO ES MUY BAJA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}
function low_5_FH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num - 5).toFixed(0);
  FrontHeight.textContent = new_FH;
  console.log(new_FH);
  new_FH_num = parseFloat(new_FH);

  if (new_FH_num < 50) {
    new_FH = 50;
    FrontHeight.textContent = new_FH;
    console.log("LA ALTURA DELANTERA DEL AUTO ES MUY BAJA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function upFH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num + 0.1).toFixed(1);
  FrontHeight.textContent = new_FH;
  console.log(new_FH);
  new_FH_num = parseFloat(new_FH);
  if (new_FH_num > 75) {
    new_FH = 75;
    FrontHeight.textContent = new_FH;
    console.log("LA ALTURA DELANTERA DEL AUTO ES MUY ELEVADA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_5_FH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num + 5).toFixed(0);
  FrontHeight.textContent = new_FH;
  console.log(new_FH);
  new_FH_num = parseFloat(new_FH);
  if (new_FH_num > 75) {
    new_FH = 75;
    FrontHeight.textContent = new_FH;
    console.log("LA ALTURA DELANTERA DEL AUTO ES MUY ELEVADA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

// funciones botones Rear Heigt low/up segun botones  !REVISAR, HAY DILEY DE 0.1 EN CADA RENDERIZACION

function lowRH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num - 0.1).toFixed(1);
  RearHeight.textContent = new_RH;
  console.log(new_RH);

  new_RH_num = parseFloat(new_RH);
  if (new_RH_num < 50) {
    new_RH = 50;
    RearHeight.textContent = new_RH;
    console.log("LA ALTURA TRASERA DEL AUTO ES MUY BAJA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}
function low_5_RH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num - 5).toFixed(0);
  RearHeight.textContent = new_RH;
  console.log(new_RH);
  new_RH_num = parseFloat(new_RH);

  if (new_RH_num < 50) {
    new_RH = 50;
    RearHeight.textContent = new_RH;
    console.log("LA ALTURA TRASERA DEL AUTO ES MUY BAJA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function upRH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num + 0.1).toFixed(1);
  RearHeight.textContent = new_RH;
  console.log(new_RH);
  new_RH_num = parseFloat(new_RH);
  if (new_RH_num > 75) {
    new_RH = 75;
    RearHeight.textContent = new_RH;
    console.log("LA ALTURA TRASERA DEL AUTO ES MUY ELEVADA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_5_RH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num + 5).toFixed(0);
  RearHeight.textContent = new_RH;
  console.log(new_RH);
  new_RH_num = parseFloat(new_RH);
  if (new_RH_num > 75) {
    new_RH = 75;
    RearHeight.textContent = new_RH;
    console.log("LA ALTURA TRASERA DEL AUTO ES MUY ELEVADA");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "Dale",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b) {
    return (parseFloat(a) + parseFloat(b)) / 2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}









var FrontWing = document.getElementById("FrontWing");
FrontWing.textContent = 1;
FrontWing_num = parseFloat(FrontWing.textContent);
console.log(FrontWing_num);
function lowFW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = FrontWing_num - 1;
  FrontWing.textContent = new_FW;
  console.log(`bajaste Front Wing y es de ${new_FW} grados`);
}
function upFW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = FrontWing_num + 1;
  FrontWing.textContent = new_FW;
  console.log(`subiste Front Wing y es de ${new_FW} grados`);
}
