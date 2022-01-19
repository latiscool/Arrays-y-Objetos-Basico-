let radiologia = [
  {
    hora: `11:00`,
    especialista: `ignacio schulz`,
    paciente: `francisca rojas`,
    rut: `9878782-1`,
    prevision: `fonasa`,
  },
  {
    hora: `11:30`,
    especialista: `federico subercaseux`,
    paciente: `pamela estrada`,
    rut: `15345241-9`,
    prevision: `isapre`,
  },
  {
    hora: `15:00`,
    especialista: `fernando wurthz`,
    paciente: `armando luna`,
    rut: `16445345-9`,
    prevision: `isapre`,
  },
  {
    hora: `15:30`,
    especialista: `ana maria godoy`,
    paciente: `manuel godoy`,
    rut: `17666419-0`,
    prevision: `fonasa`,
  },
  {
    hora: `16:00`,
    especialista: `patricia suazo`,
    paciente: `ramon ulloa`,
    rut: `14989389-k`,
    prevision: `fonasa`,
  },
];

let traumatologia = [
  {
    hora: `08:00`,
    especialista: `maria paz altuzarra`,
    paciente: `paula sanchez`,
    rut: `15554774-5`,
    prevision: `fonasa`,
  },
  {
    hora: `10:00`,
    especialista: `raul araya`,
    paciente: `angelica navas`,
    rut: `15226589-7`,
    prevision: `isapre`,
  },
  {
    hora: `10:30`,
    especialista: `maria arriagada`,
    paciente: `ana klapp`,
    rut: `15444147-9`,
    prevision: `isapre`,
  },
  {
    hora: `11:00`,
    especialista: `alejandro badilla`,
    paciente: `felipe mardones`,
    rut: `1547423-6`,
    prevision: `isapre`,
  },
  {
    hora: `11:30`,
    especialista: `cecilia budnik`,
    paciente: `diego marre`,
    rut: `16554741-k`,
    prevision: `isapre`,
  },
  {
    hora: `12:00`,
    especialista: `arturo cavagnaro`,
    paciente: `cecilia melendez`,
    rut: `9747535-8`,
    prevision: `isapre`,
  },
  {
    hora: `12:30`,
    especialista: `andres kanacri`,
    paciente: `marcial suazo`,
    rut: `11254785-5`,
    prevision: `isapre`,
  },
];
let dental = [
  {
    hora: `08:30`,
    especialista: `andrea zuñiga`,
    paciente: `marcela retamal`,
    rut: `11123425-6`,
    prevision: `isapre`,
  },
  {
    hora: `11:00`,
    especialista: `maria pia zañartu`,
    paciente: `angel muñoz`,
    rut: `9878789-2`,
    prevision: `fonasa`,
  },
  {
    hora: `11:30`,
    especialista: `scarlett witting`,
    paciente: `mario kast`,
    rut: `7998789-5`,
    prevision: `fonasa`,
  },

  {
    hora: `13:00`,
    especialista: `francisco von teuber`,
    paciente: `karin fernandez`,
    rut: `18887662-k`,
    prevision: `fonasa`,
  },
  {
    hora: `13:30`,
    especialista: `eduardo viñuela`,
    paciente: `hugo sanchez`,
    rut: `17665461-4`,
    prevision: `isapre`,
  },
  {
    hora: `14:00`,
    especialista: `raquel villaseca`,
    paciente: `ana sepulveda`,
    rut: `14441281-0`,
    prevision: `isapre`,
  },
];

// *************
// TABLA RADIOLOGIA
// ************

var datos_radio =
  '  <thead> <tr> <th scope="col">HORA</th>  <th scope="col">ESPECIALISTA</th>  <th scope="col">PACIENTE</th>  <th scope="col">RUT</th> <th scope="col">PREVISION</th>  </tr></thead>';

for (var i = 0; i < radiologia.length; i++) {
  datos_radio += `<tr>
          <td>${radiologia[i].hora}</td>
          <td>${radiologia[i].especialista}</td>
          <td>${radiologia[i].paciente}</td>
          <td>${radiologia[i].rut}</td>
          <td>${radiologia[i].prevision}</td>
      </tr>`;
}

document.getElementById('tabla-radio').innerHTML = datos_radio;

document.getElementById(
  'radio-info'
).innerHTML = `<strong>Primera atención</strong>: ${radiologia[0].paciente} - ${
  radiologia[0].prevision
} | <strong>Última atención</strong>: ${
  radiologia[radiologia.length - 1].paciente
} - ${radiologia[radiologia.length - 1].prevision}`;

// *************
// TABLA DENTAL
// ************

var datos_dental =
  '  <thead> <tr> <th scope="col">HORA</th>  <th scope="col">ESPECIALISTA</th>  <th scope="col">PACIENTE</th>  <th scope="col">RUT</th> <th scope="col">PREVISION</th>  </tr></thead>';

for (var i = 0; i < dental.length; i++) {
  datos_dental += `<tr>
          <td>${dental[i].hora}</td>
          <td>${dental[i].especialista}</td>
          <td>${dental[i].paciente}</td>
          <td>${dental[i].rut}</td>
          <td>${dental[i].prevision}</td>
      </tr>`;
}

document.getElementById('tabla-dental').innerHTML = datos_dental;

document.getElementById(
  'dental-info'
).innerHTML = `<strong>Primera atención</strong>: ${dental[0].paciente} - ${
  dental[0].prevision
} | <strong>Última atención</strong>: ${dental[dental.length - 1].paciente} - ${
  dental[dental.length - 1].prevision
}`;

// *************
// TABLA TRAUMATOLOGIA
// ************

var datos_trauma =
  '  <thead> <tr> <th scope="col">HORA</th>  <th scope="col">ESPECIALISTA</th>  <th scope="col">PACIENTE</th>  <th scope="col">RUT</th> <th scope="col">PREVISION</th>  </tr></thead>';

for (var j = 0; j < traumatologia.length; j++) {
  datos_trauma += `<tr>
          <td>${traumatologia[j].hora}</td>
          <td>${traumatologia[j].especialista}</td>
          <td>${traumatologia[j].paciente}</td>
          <td>${traumatologia[j].rut}</td>
          <td>${traumatologia[j].prevision}</td>
      </tr> `;
}
document.getElementById('tabla-trauma').innerHTML = datos_trauma;

document.getElementById(
  'trauma-info'
).innerHTML = `<strong>Primera atención</strong>: ${
  traumatologia[0].paciente
} - ${dental[0].prevision} | <strong>Última atención</strong>: ${
  traumatologia[traumatologia.length - 1].paciente
} - ${traumatologia[traumatologia.length - 1].prevision}`;
