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

//info Front Height 

var FrontHeight = document.getElementById("FrontHeight");
FrontHeight.textContent = 50;
var FrontHeight_num = parseFloat(FrontHeight.textContent);


//info Rear Height 

var RearHeight = document.getElementById("RearHeight");
RearHeight.textContent = 50;

var RearHeight_num = parseFloat(RearHeight.textContent);

// info Front Wing
var FrontWing = document.getElementById("FrontWing");
FrontWing.textContent = 1;
FrontWing_num = parseFloat(FrontWing.textContent);

// Info Rear Wing

var RearWing = document.getElementById("RearWing");
RearWing.textContent = 1;
RearWing_num = parseFloat(RearWing.textContent);


// calculo primitivo balance auto

function CalculadoraBalance(a, b, c, d) {
  return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, FrontWing_num, RearWing_num);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);

// funciones botones Front Heigt low/up segun botones

function lowFH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num - 0.1).toFixed(1);
  FrontHeight.textContent = new_FH;
  

  new_FH_num = parseFloat(new_FH);
  if (new_FH_num < 50) {
    new_FH = 50;
    FrontHeight.textContent = new_FH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}
function low_5_FH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num - 5).toFixed(0);
  FrontHeight.textContent = new_FH;
  
  new_FH_num = parseFloat(new_FH);

  if (new_FH_num < 50) {
    new_FH = 50;
    FrontHeight.textContent = new_FH;
   
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function upFH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num + 0.1).toFixed(1);
  FrontHeight.textContent = new_FH;
  
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
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_5_FH() {
  FrontHeight_num = parseFloat(FrontHeight.textContent);
  new_FH = Number(FrontHeight_num + 5).toFixed(0);
  FrontHeight.textContent = new_FH;
  
  new_FH_num = parseFloat(new_FH);
  if (new_FH_num > 75) {
    new_FH = 75;
    FrontHeight.textContent = new_FH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura delantera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(new_FH, RearHeight_num, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

// funciones botones Rear Heigt low/up segun botones 

function lowRH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num - 0.1).toFixed(1);
  RearHeight.textContent = new_RH;
  

  new_RH_num = parseFloat(new_RH);
  if (new_RH_num < 50) {
    new_RH = 50;
    RearHeight.textContent = new_RH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}
function low_5_RH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num - 5).toFixed(0);
  RearHeight.textContent = new_RH;
  
  new_RH_num = parseFloat(new_RH);

  if (new_RH_num < 50) {
    new_RH = 50;
    RearHeight.textContent = new_RH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy baja",
      footer: 'Probá a usar valores mayores a 50 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }

  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function upRH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num + 0.1).toFixed(1);
  RearHeight.textContent = new_RH;
 
  new_RH_num = parseFloat(new_RH);
  if (new_RH_num > 75) {
    new_RH = 75;
    RearHeight.textContent = new_RH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_5_RH() {
  RearHeight_num = parseFloat(RearHeight.textContent);
  new_RH = Number(RearHeight_num + 5).toFixed(0);
  RearHeight.textContent = new_RH;
  
  new_RH_num = parseFloat(new_RH);
  if (new_RH_num > 75) {
    new_RH = 75;
    RearHeight.textContent = new_RH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La altura trasera del auto es muy elevada",
      footer: 'Probá a usar valores menores a 75 mm',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, new_RH, FrontWing_num, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}







// Info Front Wing fun


function lowFW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = FrontWing_num - 1;
  FrontWing.textContent = new_FW;

  new_FW_num = parseFloat(new_FW);
  if (new_FW_num < 1) {
    new_FW = 1;
    FrontWing.textContent = new_FW;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron delantero del auto esta muy bajo",
      footer: 'Probá a usar valores mayores a 1',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      });
}
function CalculadoraBalance(a, b, c, d) {
  return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, new_FW, RearWing_num);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}


function low_2_FW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = Number(FrontWing_num - 2).toFixed(0);
  FrontWing.textContent = new_FW;
  
  new_FW_num = parseFloat(new_FW);
  if (new_FW_num < 1) {
    new_FH = 1;
    FrontWing.textContent = new_FH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron delantero del auto esta muy bajo",
      footer: 'Probá a usar valores mayores a 1',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
  balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, new_FW, RearWing_num);
  console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
  }




function upFW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = FrontWing_num + 1;
  FrontWing.textContent = new_FW;
  
  new_FW_num = parseFloat(new_FW);
  if (new_FW_num > 15) {
    new_FW = 15;
    FrontWing.textContent = new_FW;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron delantero del auto esta muy bajo",
      footer: 'Probá a usar valores mayores a 1',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      });
}
function CalculadoraBalance(a, b, c, d) {
  return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, new_FW, RearWing_num);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_2_FW() {
  FrontWing_num = parseFloat(FrontWing.textContent);
  new_FW = Number(FrontWing_num + 2).toFixed(0);
  FrontWing.textContent = new_FW;
  
  new_FW_num = parseFloat(new_FW);
  if (new_FW_num > 15) {
    new_FH = 15;
    FrontWing.textContent = new_FH;
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron delantero del auto esta muy alto",
      footer: 'Probá a usar valores menores a 15',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, new_FW, RearWing_num);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}



// Info Rear Wing fun

function lowRW() {
  RearWing_num = parseFloat(RearWing.textContent);
  new_RW = RearWing_num - 1;
  RearWing.textContent = new_RW;
  
  new_RW_num = parseFloat(new_RW);
  if (new_RW_num < 1) {
    new_RW = 1;
    RearWing.textContent = new_RW;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron trasero del auto esta muy bajo",
      footer: 'Probá a usar valores mayores a 1',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      });
}
function CalculadoraBalance(a, b, c, d) {
  return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, FrontWing_num, new_RW);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function low_2_RW() {
  RearWing_num = parseFloat(RearWing.textContent);
  new_RW = Number(RearWing_num - 2).toFixed(0);
  RearWing.textContent = new_RW;
  
  new_RW_num = parseFloat(new_RW);
  if (new_RW_num < 1) {
    new_RH = 1;
    RearWing.textContent = new_RH;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron trasero del auto esta muy bajo",
      footer: 'Probá a usar valores mayores a 1',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, FrontWing_num, new_RW);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function upRW() {
  RearWing_num = parseFloat(RearWing.textContent);
  new_RW = RearWing_num + 1;
  RearWing.textContent = new_RW;

  new_RW_num = parseFloat(new_RW);
  if (new_RW_num > 15) {
    new_RW = 15;
    RearWing.textContent = new_RW;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron trasero del auto esta muy bajo",
      footer: 'Probá a usar valores menores a 15',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      });
}
function CalculadoraBalance(a, b, c, d) {
  return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
}
const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, FrontWing_num, new_RW);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}

function up_2_RW() {
  RearWing_num = parseFloat(RearWing.textContent);
  new_RW = Number(RearWing_num + 2).toFixed(0);
  RearWing.textContent = new_RW;
  
  new_RW_num = parseFloat(new_RW);
  if (new_RW_num > 15) {
    new_RH = 15;
    RearWing.textContent = new_RH;
   
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El aleron trasero del auto esta muy alto",
      footer: 'Probá a usar valores menores a 15',
      confirmButtonText: "OK",
      confirmButtonColor: "#0061ff" ,
      }); 
  }
  function CalculadoraBalance(a, b, c, d) {
    return ((parseFloat(a) + parseFloat(b)) / 2) + (parseFloat(c) + parseFloat(d))/2;
  }
  const balanceResult = document.getElementById("balanceResult");
balanceResult.textContent = CalculadoraBalance(FrontHeight_num, RearHeight_num, FrontWing_num, new_RW);
console.log(`El balance de tu auto es de ${balanceResult.textContent}%`);
}