import "./style.css"

export const Login = ({handleSubmit,onSubmitFunction,register,errors}) => {
 
  return (
    <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
      <h3>Fazer o login</h3>
      <input placeholder="usuario" type="text" {...register("username")} />
      <span>{errors.username?.message}</span>
      <input placeholder="Senha" type="password" {...register("password")} />
      <span>{errors.password?.message}</span>
      <button type="submit">Login</button>
    </form>
  );
};
