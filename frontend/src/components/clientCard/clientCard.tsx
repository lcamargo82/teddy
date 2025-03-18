import { FiMinus, FiPlus } from "react-icons/fi";
import { ClientCardContainer } from "./style";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import { ModalDelete } from "../modal/modalDelete/modalDelete";
import { ModalCreateAndUpdate } from "../modal/modalCreateUpdate/modalCreateAndUpdate";
import { NumericFormat } from "react-number-format";
import { ClientStore } from "../../stores/clients/client.store";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

interface IClientCard {
    id: string;
    name: string;
    wage: string;
    enterprise: string;
}

function ClientCard({ id, name, wage, enterprise }: IClientCard) {
    const page = useLocation().pathname
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false)

    const selectClient = ClientStore((state) => state.selectClient)
    const selectedClients = ClientStore((state) => state.selectedClients)
    const clientRemove = ClientStore((state) => state.removeClientById)
    const handleSelectClient = () => {
        const userAlreadySelected = selectedClients.find(client => client.id === id)

        if (userAlreadySelected) {
            toast.error("Este cliente já foi selecionado")
        } else {
            selectClient({ id, enterprise, name, wage })
            toast.success("Cliente selecionado")
        }
    }

    const handleRemoveClientSelected = () => {
        clientRemove(id)
    }

    return (
        <ClientCardContainer>
            <div className="infos">
                <div>
                    <span className="name">{name}</span>
                </div>
                <div>
                    <span>Salário: R$</span>
                    <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={wage}
                        fixedDecimalScale
                        allowNegative={false}
                        displayType="text"
                    />
                </div>
                <div>
                    <span>Empresa: R$</span>
                    <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={enterprise}
                        fixedDecimalScale
                        allowNegative={false}
                        displayType="text"
                    />
                </div>
            </div>
            <div className="actions">
                {
                    page === "/selected-clients" ?
                        <div className="selected-client-remove">
                            <button><FiMinus onClick={() => handleRemoveClientSelected()} className="icon-action" /></button>
                        </div>
                        :
                        <>
                            <button><FiPlus onClick={() => handleSelectClient()} className="icon-action hover-click-green" /></button>
                            <button><LuPencil onClick={() => setOpenModalUpdate(!openModalUpdate)} className="icon-action hover-click-yellow" /></button>
                            <button><HiOutlineTrash onClick={() => setOpenModal(!openModal)} className="icon-action" color="red" /></button>
                        </>
                }
            </div>
            <ModalDelete id={id} name={name} isOpen={openModal} handleClose={() => setOpenModal(!openModal)} />
            <ModalCreateAndUpdate isOpen={openModalUpdate} mode="update" id={id} name={name} wage={wage} enterprise={enterprise} handleClose={() => setOpenModalUpdate(!openModalUpdate)} />
        </ClientCardContainer>
    )
}

export default ClientCard;