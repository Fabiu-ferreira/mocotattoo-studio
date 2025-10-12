document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita envio padrão

        // Aqui você poderia enviar via fetch/AJAX se quisesse
        // Por enquanto, apenas redireciona para sucesso.html
        window.location.href = "sucesso.html";
    });
});
