import { ReactNode } from "react";

export interface IModal {
    isOpen: boolean;
    children?: ReactNode;
    id?: string;
    name?: string;
    wage?: string;
    enterprise?: string;
    mode?: "create" | "update"
    handleOpen?: () => void;
    handleClose: () => void;
}