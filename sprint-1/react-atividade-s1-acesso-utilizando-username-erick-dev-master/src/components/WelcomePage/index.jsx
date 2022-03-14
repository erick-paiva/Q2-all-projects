
const WelcomePage = ({ user, setIsLoggedIn }) => {
    function HandleLogout (setIsLoggedIn){
        setIsLoggedIn(false)
    }
    return (
        <form>
            <h2>Bem vindo, {user}!</h2>
            <button onClick={() => HandleLogout(setIsLoggedIn)}>Sair</button>
        </form>
    )
}

export default WelcomePage