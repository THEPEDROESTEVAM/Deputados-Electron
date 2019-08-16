import { pathToFileURL } from "url";

async function getCotacao() {
  let template = document.getElementById("saida");

  const profileResponse = await fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados`
  );

  let data = await profileResponse.json();

  data.dados.map(data => {
    template.innerHTML += `
      <div id="dep" key={data.id}>
        <div id="photo">
            <img src=${data.urlFoto} id="img" />
        </div>
        <div id="info">
            <span><b>Deputado: </b>${data.nome }</span>
            <span><b>Partido: </b>${data.siglaPartido } - ${data.siglaUf}</span>
            <span><b>E-mail: </b><a href="#" id="a">${data.email }</a></span>
            <a href="https://dadosabertos.camara.leg.br/api/v2/deputados/204554">Ver gastos</a>
        </div>
      </div>
    `;
  });
}

getCotacao();