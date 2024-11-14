document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    // Função para obter usuários do localStorage
    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    // Função para salvar usuários no localStorage
    function saveUser(user) {
        const users = getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Cadastro
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email-register').value.toLowerCase(); // Normaliza para minúsculas
            const password = document.getElementById('password-register').value;

            const users = getUsers();

            // Verifica se o e-mail já está cadastrado
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('Este e-mail já está cadastrado! Tente um diferente.');
                return; // Impede o cadastro
            }

            // Simula o registro do usuário no localStorage
            saveUser({ email, password });

            // Redireciona automaticamente para a tela de login
            window.location.href = 'login.html';
            //Aqui n teve jeito, o pai Gepeto teve que trabalhar mesmo... .Js me perco, mas entendi oq foi feito
            // Consigo replicar esse Js? Não... mas entendi oq foi feito kkkkk
        });
    }
});
