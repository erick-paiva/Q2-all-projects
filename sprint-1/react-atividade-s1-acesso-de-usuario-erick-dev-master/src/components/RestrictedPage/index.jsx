import "./style.css"


const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
    //<button>Entrar</button>

    return (
        <div className="caixaUser">
            {isLoggedIn === false ? (<div className="userMsg"> <h2>Bem vindo, {user}!</h2>
            <button onClick={Logout}>Sair</button> </div>)
            :
            (<div className="userMsg"><h2>Você não pode acessar essa página!</h2>
            <button onClick={Login}>Entrar</button> </div>)
            } 
        </div>
        
    )
}

export default RestrictedPage