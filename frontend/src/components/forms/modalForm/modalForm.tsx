import { Button, FormControl } from "@mui/material";
import Input from "@mui/joy/Input"
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ModaFormContainer } from "./style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientService } from "../../../services/client.service";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { IClientEntity } from "../../../models/client.entity";
import { clientSchema } from "../../../models/schemas/clientSchema";
import type { z } from "zod";

interface IFormInputs {
    id?: string;
    name: string;
    wage: number;
    enterprise: number;
}

interface IModalForm {
    mode: "create" | "update" | undefined;
    handleClose: () => void;
    clientId?: string;
    client: IClientEntity;
}

function ModalForm({ mode, handleClose, client }: IModalForm) {
    const clientService = new ClientService()
    const queryClient = useQueryClient();
    const [valueWage, setValueWage] = useState<number>(0)
    const [valueEnterprise, setValueEnterprise] = useState<number>(0)
    type clientFormSchema = z.infer<typeof clientSchema>
    const { handleSubmit, control, setValue, formState: { errors } } = useForm<clientFormSchema>({
        resolver: zodResolver(clientSchema)
    });

    const { mutate: createClient } = useMutation({
        mutationFn: (client: IFormInputs) => clientService.createClient(client),
        onSuccess: () => {
            toast.success("Cliente criado com sucesso");
            handleClose();
            queryClient.invalidateQueries({ queryKey: ["clients"] });
        },
        onError: () => {
            toast.error("Erro ao salvar o cliente");
        }
    })   

    const { mutate: updateClient } = useMutation({
        mutationFn: (params: { id: string, client: IFormInputs }) => clientService.updateClient(params.id, params.client),
        onSuccess: () => {
            handleClose();
            queryClient.invalidateQueries({ queryKey: ["clients"] });
            toast.success("Cliente atualizado com sucesso");
        },
        onError: () => {
            toast.error("Erro ao atualizar o cliente");
        }
    })

    useEffect(() => {
        if (mode === "update" && client) {
            setValue("name", client.name);
            setValue("wage", String(client.wage));
            setValue("enterprise", String(client.enterprise));
            setValueWage(Number(client.wage));  
            setValueEnterprise(Number(client.enterprise)); 
        }
    }, [mode, client, setValue]);

    const onSubmit: SubmitHandler<clientFormSchema> = async (data: clientFormSchema) => {
        if (mode === "create") {
            createClient({
                name: data.name,
                wage: Number(valueWage),
                enterprise: Number(valueEnterprise),
            })
        } else {
            const id = client.id || ''
            updateClient({
                id,
                client: {
                    name: data.name,
                    wage: Number(valueWage),
                    enterprise: Number(valueEnterprise),
                }
            })
        }
    };

    return (
        <ModaFormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormControl component="fieldset">
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input defaultValue={mode === "update" ? client.name : ''} variant="outlined" placeholder="Digite o nome" {...field} />}
                />
            </FormControl>
            {errors.name && <span className="warning">{errors.name.message}</span>}
            <FormControl component="fieldset">
                <Controller
                    name="wage"
                    control={control}
                    render={({ field }) =>
                        <NumericFormat
                            {...field}
                            defaultValue={mode === "update" ? client.wage : ''}
                            placeholder="Digite o salário"
                            customInput={Input}
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            allowNegative={false}
                            onValueChange={(values) => {
                                setValueWage(values.floatValue || 0)
                            }}
                        />}
                />
            </FormControl>
            {errors.wage && <span className="warning">{errors.wage.message}</span>}
            <FormControl component="fieldset">
                <Controller
                    name="enterprise"
                    control={control}
                    render={({ field }) =>
                        <NumericFormat
                            {...field}
                            defaultValue={mode === "update" ? client.enterprise : ''}
                            placeholder="Digite o valor da empresa"
                            customInput={Input}
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            fixedDecimalScale
                            allowNegative={false}
                            onValueChange={(values) => {
                                setValueEnterprise(values.floatValue || 0)
                            }}
                        />}
                />
            </FormControl>
            {errors.enterprise && <span className="warning">{errors.enterprise.message}</span>}
            <Button type="submit" variant="outlined" style={{ backgroundColor: "var(--primary-color)", color: "white", border: "none" }} className="button-orange">
                {mode === "create" ? "Criar Cliente" : "Editar Cliente"}
            </Button>
        </ModaFormContainer>
    );
}

export default ModalForm;
