import Titulo from "../../components/TituloKenzie";
import { Container } from "./styles";
import Add from "../../assets/iconAdd.svg";
import AddWork from "../../assets/addWork.svg";
import tec from "../../assets/tec.svg";
import iconTech from "../../assets/iconTech.svg";
import jobs from "../../assets/jobs.svg";
import cellphone from "../../assets/cellphone.svg";
import email from "../../assets/email.svg";
import { Redirect, useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ModalTech from "../../components/ModalTech";
import ModalWork from "../../components/ModalWork";
import ListaWorks from "../../components/ListaWorks";
import ListaTechs from "../../components/ListaTechs";
import { toast } from "react-toastify";
const Home = ({ auth ,setAuth }) => {
    const history = useHistory()
  const userId = useParams();
  const [exibirTech, setExibirTech] = useState(false)
  const [exibirWork, setExibirWork] = useState(false)
  const [user, setUser] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

    const deslogar = () => {
        localStorage.clear()
        history.push("/")
    }
  const getData = () => {
    api
      .get(`users/${userId.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setUser(resp.data));
  };
  const msgSucesso = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }
  const adcionarTech = (user) => {
    api.post("/users/techs", user, {headers: {
        Authorization: `Bearer ${token}`
      }},).then(() => {getData();msgSucesso("Adicionado com sucesso!")})
    .catch((err) => console.log(err));
  };
  const editarTech = (id,user) => {
    api.put(`/users/techs/${id}`, user, {headers: {
      Authorization: `Bearer ${token}`
    }},).then(() => {getData();msgSucesso("Editado com sucesso!")})
    .catch((err) => console.log(err));
  };
  const apagarTech = (id) => {
    api.delete(`/users/techs/${id}`, {headers: {
      Authorization: `Bearer ${token}`
    }},).then(() => {getData();msgSucesso("Apagado com sucesso!")})
    .catch((err) => console.log(err));
  };
  
  const adcionarTrabalho = (user) => {
  api.post("/users/works", user, {headers: {
      Authorization: `Bearer ${token}`
    }},).then(() => {getData();msgSucesso("Adicionado com sucesso!")})
  .catch((err) => console.log(err));
};
const editarTrabalho = (id,user) => {
  api.put(`/users/works/${id}`, user, {headers: {
      Authorization: `Bearer ${token}`
    }},).then(() => {getData();msgSucesso("Editado com sucesso!")})
  .catch((err) => console.log(err));
};
const apagarTrabalho = (id) => {
  api.delete(`/users/works/${id}`, {headers: {
      Authorization: `Bearer ${token}`
    }},).then(() => {getData();msgSucesso("Apagado com sucesso!")})
  .catch((err) => console.log(err));
};

  useEffect(() => {
    getData();
  },);

  if (!auth) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <header>
        <Titulo />
        <figure>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png"
            alt="user"
          />
        </figure>
      </header>
      <div id="techs">
      <div className="minhasTecnologias tecs">
        <div className="headTecs">
          
          <h3>Minhas tecnologias</h3>
          <img src={Add} alt="add" onClick={() => setExibirTech(!exibirTech)} />
        </div>
        {exibirTech && <ModalTech adcionarTech={adcionarTech} exibirTech={exibirTech} setExibirTech={setExibirTech} editarTech={editarTech}/>}
        <ul className="listaTechs">
        {user.techs?.map((e) => (
          <ListaTechs key={e.id} e={e} apagarTech={apagarTech} tec={tec} iconTech={iconTech} editarTech={editarTech} />
        ))}
        </ul>
      </div>
      <div className="MeusTrabalhos tecs">
        <div className="headTecs">
          
          <h3>Meus Trabalhos</h3>

          <img src={AddWork} alt="add" onClick={() => setExibirWork(!exibirWork)} className="imgWork" />
  
        </div>
        { exibirWork && <ModalWork adcionarTrabalho={adcionarTrabalho} exibirWork={exibirWork} setExibirWork={setExibirWork} />}
        <ul className="listaWorks">
       
        {user.works?.map((e) => (
             <ListaWorks jobs={jobs} e={e} editarTrabalho={editarTrabalho} apagarTrabalho={apagarTrabalho} />
        ))}
        </ul>
      </div>
      <div className="dadosUser">
        <figure>
          <div className="headUser">
            
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png"
              alt="user"
            />
            <div>
              
              <h3>Nome</h3> <h4>{user.bio}</h4> <h5>{user.course_module}</h5>
            </div>
          </div>
        </figure>
        <div className="controlUser">
          <div className="NameContact">
          <img src={cellphone} alt="img" />
            <div><h3>{user.name}</h3> <p>{user.contact}</p></div>
          </div>
          <div className="Email">
          <img src={email} alt="img" />
            <div><h3>Enviar email</h3> <p>{user.email}</p></div>
          </div>
        <button onClick={() => {deslogar() ; setAuth(false)}}>Sair</button>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Home;
