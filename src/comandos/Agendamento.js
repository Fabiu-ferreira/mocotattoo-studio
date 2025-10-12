document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamentoForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // impede o comportamento padrão (recarregar)
            
            // Aqui você pode adicionar validações ou enviar via fetch/AJAX
            // Por enquanto, só vamos redirecionar
            window.location.href = "sucesso.html";
        });
    }
});
