import { Modal } from "@mui/material"
import { IModal } from "../../../models/modal.entity"
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import ModalForm from "../../forms/modalForm/modalForm";


export const ModalCreateAndUpdate = ({ isOpen, handleClose, mode, id, wage, enterprise, name }: IModal) => {
    return (
        <Modal open={isOpen}>
            <ModalDialog layout="center">
                <ModalClose onClick={handleClose} />
                <DialogTitle>{mode === "create" ? "Criar cliente:" : "Editar Cliente"}</DialogTitle>
                <DialogContent>
                    <ModalForm client={{
                        id: id || '',
                        name: name || '',
                        enterprise: enterprise || '',
                        wage: wage || ''
                    }} clientId={id} handleClose={() => handleClose()} mode={mode} />
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}