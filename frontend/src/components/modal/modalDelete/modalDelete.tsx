import { Button, Modal } from "@mui/material"
import { IModal } from "../../../models/modal.entity"
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import { ClientService } from "../../../services/client.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const ModalDelete = ({ isOpen, handleClose, id, name }: IModal) => {
    const clientService = new ClientService()
    const queryClient = useQueryClient()

    const { mutate: deleteClientMutation } = useMutation({
        mutationFn: (id: string) => clientService.deleteClient(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clients"] });
            toast.success("Cliente excluído com sucesso");
        },
        onError: (err) => {
            console.error("Erro ao excluir cliente:", err);
        },
    });

    const handleDelete = () => {
        deleteClientMutation(id || '')
    }

    return (
        <Modal open={isOpen}>
            <ModalDialog layout="center">
                <ModalClose onClick={handleClose} />
                <DialogTitle>Excluir cliente: </DialogTitle>
                <DialogContent>
                    <p>Você está prestes a ecluir o cliente: <span className="bold">{name}</span></p>
                    <Button variant="outlined" style={{ backgroundColor: "var(--primary-color)", color: "white", border: "none" }} className="button-orange" onClick={handleDelete}>Excluir cliente</Button>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}