import "./style.css";

export const Login = ({ handleSubmit, onSubmitFunction, register, errors }) => {
  return (
    <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
      <h3 className="titulo">Cadastrar e Logar</h3>
      <div className="efeitoPreenchimento">
        <input placeholder="nome" type="text" {...register("name")} />
        <label>digite seu nome</label>
        <span>{errors.name?.message}</span>
      </div>
      <div className="efeitoPreenchimento">
        <input placeholder="email" type="text" {...register("email")} />
        <label>digite seu email</label>
        <span>{errors.email?.message}</span>
      </div>
      <div className="efeitoPreenchimento">
        <input placeholder="Senha" type="password" {...register("password")} />
        <label>digite sua senha</label>
        <span> {errors.password?.message}</span>
      </div>
      <div className="efeitoPreenchimento">
        <input
          placeholder="confirmar a senha"
          type="password"
          {...register("confirmPassword")}
        />
        <label>confirme sua senha</label>
        <span>{errors.confirmPassword?.message}</span>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
