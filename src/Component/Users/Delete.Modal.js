import { useState } from "react"
import ModalDelete from "./ModalDelete"


function Delete (props) {

    const [modal , setModal] = useState(false)

    return (
        <div>
            <button onClick={() => {
                setModal(true)
            }}>Delete</button>
            {modal && <ModalDelete none={setModal} onDel={props.onDel} id={props.id}/>}
        </div>
    )


}

export default Delete