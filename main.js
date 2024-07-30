document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var table = document
      .getElementById("contactTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    var cellNome = newRow.insertCell(0);
    var cellTelefone = newRow.insertCell(1);

    cellNome.textContent = nome;
    cellTelefone.textContent = telefone;

    document.getElementById("contactForm").reset(0);
  });

  document.querySelector('.reset-rows').addEventListener('click', function() {
    var tbody = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';
  });
