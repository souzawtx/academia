// Os dados são salvos assim:
localStorage.setItem('treino-semana-dados-v2', JSON.stringify(state));

// E recuperados assim:
const dados = JSON.parse(localStorage.getItem('treino-semana-dados-v2'));