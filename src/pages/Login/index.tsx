import { LoginContainer } from './style';

export function Login() {
  return(
    <LoginContainer>
      <div>
        <h1>Mercadin SASA</h1>
        <input type="text" placeholder="Usuário..." />
        <input type="text" placeholder="Senha..." />
        <button>Entrar</button>
      </div>
    </LoginContainer>
  );
}