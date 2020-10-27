const form = document.querySelector('#form');

form.addEventListener('submit', searchWikipedia);

function searchWikipedia(e) {
  e.preventDefault();

  const input = document.querySelector('#input').value;

fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch=${input}&format=json`)
  .then(response => response.json())
  .then(data => showData(data.query.search))
}

function showData(data){
  const output = document.getElementById('output');

  output.textContent = '';

  data.forEach((title)=> {

    const div = document.createElement('div');

    div.innerHTML = `
      <div>
        <ul>
          <li>${title.title}</li>
          <li style="list-style-type:none">${title.snippet}</li>
        </ul>
      </div>
    `;

    output.appendChild(div);
    
  })
}
