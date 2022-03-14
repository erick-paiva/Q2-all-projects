import toast from "react-hot-toast";
import api from "../../../services/api";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, msgError) => (dispatch) => {
    api.get(`/api/digimon/name/${digimon}`).then(resp => {dispatch(addDigimon(resp.data));toast.success("Voce achou um Digimon!")})
    .catch(() => msgError("Digimon nao encontrado!"))
}
export default addDigimonsThunk
