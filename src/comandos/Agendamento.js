const form = document.getElementById('agendamentoForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede recarregar a página
    window.location.href = "sucesso.html"; // redireciona para sucesso
  });
}
