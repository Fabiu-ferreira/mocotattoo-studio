// Seleciona o formulário pelo ID
const form = document.getElementById('agendamentoForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio real do formulário

    // Opcional: você pode pegar os dados do formulário se quiser usar
    const nome = form.nome.value;
    const email = form.email.value;
    const telefone = form.telefone.value;

    // Aqui você poderia salvar localmente ou enviar para um serviço externo se quiser

    // Redireciona para a página de sucesso
    window.location.href = "sucesso.html";
  });
}
