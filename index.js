function validar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("password").value;
    const root = document.documentElement;
    const loginVerificado = verificarLogin()
    const senhaVerificada = verificarSenha()
    function verificarLogin() {
        if (login == "root") {
            root.style.setProperty('--login', '#00FF00');
            root.style.setProperty('--colorText', 'white');
            root.style.setProperty('--fontTamanho', '15px');
            console.log("login está sendo chamado")
        } else {
            console.log("Login Não foi Verificado");
            root.style.setProperty('--login', '#B22222');
            root.style.setProperty('--colorText', 'white');
        }
        return
    }
    function verificarSenha() {
        if (senha == "root") {
            root.style.setProperty('--senha', '#00FF00');
            console.log("Senha está sendo chamada")
        } else {
            console.log("Senha Não foi Verificada");
            root.style.setProperty('--senha', '#FF4500', );
        }
        return
    }
}
function reset(){
    const login = document.getElementById("login").value="";
    const senha = document.getElementById("password").value="";
    const root = document.documentElement;
    root.style.setProperty('--login', '');
    root.style.setProperty('--senha', '');
    console.log("resetado!")

}