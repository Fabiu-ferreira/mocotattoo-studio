const form = document.getElementById('agendamentoForm');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault(); // impede o envio real do formulário
    // Aqui você poderia pegar os dados, se quiser salvar localmente
    window.location.href = "sucesso.html"; // redireciona para a página de sucesso
  });
}
