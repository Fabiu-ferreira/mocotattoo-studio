const form = document.getElementById('agendamentoForm');

if(form){
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio padrão

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      if(response.ok){
        window.location.href = "sucesso.html"; // redireciona para a página de sucesso
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Ocorreu um erro. Tente novamente.");
    });
  });
}
