import { useEffect, useState } from "react";
import { ClientService, IClientResponse } from "../../services/client.service";
import ClientCard from "../clientCard/clientCard";
import { ClientListContainer } from "./style";
import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ModalCreateAndUpdate } from "../modal/modalCreateUpdate/modalCreateAndUpdate";
import { ClientStore } from "../../stores/clients/client.store";
import { useLocation } from "react-router-dom";
import { Input } from "@mui/joy";

const ClientList = () => {
    const location = useLocation();
    const page = location.pathname;
    const clientService = new ClientService();
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
    const [clientFindingName, setClientFindingName] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
    const [limit, setLimit] = useState<number>(12);

    const selectedClients = ClientStore((state) => state.selectedClients);
    const clearSelectedClients = ClientStore((state) => state.clearSelectedClients);

    const { data: clients, isLoading, isError, error } = useQuery<IClientResponse>({
        queryKey: ["clients", debouncedSearchTerm, currentPage, limit],
        queryFn: async () => {
            try {
                const data = await clientService.findAll(currentPage, limit, debouncedSearchTerm);
                return data;
            } catch {
                throw new Error("Não foi possível carregar os clientes.");
            }
        },
        placeholderData: { clients: [], count: 0 },
        select: (data) => ({ clients: data.clients, count: data.count }),
    });

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(clientFindingName);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [clientFindingName]);

    if (isLoading) return <div>Carregando...</div>;
    if (isError) return <div>{error.message}</div>;

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const options = Array.from(
        { length: Math.floor(clients?.count || 0 / 4) },
        (_, index) => (index + 1) * 4
    );

    const generatePageNumbers = () => {
        const totalPages = clients !== undefined && Math.ceil(clients?.count / limit) || 0;
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    return (
        <ClientListContainer>
            <div>
                <Input onChange={(e) => setClientFindingName(e.currentTarget.value)} placeholder="Pesquise pelo nome do cliente" />
            </div>
            <div className="header-list-container">
                {
                    page === "/selected-clients" ?
                        <div>
                            <span className="bold">Clientes selecionados:</span>
                        </div>
                        :
                        <div className="header-list">
                            <div>
                                <span className="bold">{clients?.count}</span> Clientes encontrados:
                            </div>
                            <div>
                                Clientes por página:
                                <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="limit-page-select">
                                    {options.map(optionItem => <option value={optionItem} key={optionItem}>{optionItem}</option>)}
                                </select>
                            </div>
                        </div>
                }
            </div>
            <ul>
                {
                    page === "/selected-clients" && selectedClients.length > 0 ?
                        selectedClients.map((client) => (
                            <ClientCard id={client.id} key={client.id} enterprise={client.enterprise} name={client.name} wage={client.wage} />
                        ))
                        :
                        page === "/selected-clients" && selectedClients.length < 1 ? <div>Selecione clientes</div> :
                        clients?.clients.length === 0 ? <div>Nenhum cliente encontrado</div> :    
                        clients?.clients.map((client) => (
                                <ClientCard id={client.id} key={client.id} enterprise={client.enterprise} name={client.name} wage={client.wage} />
                            ))
                }
            </ul>

            <Button onClick={() => page === "/selected-clients" ? clearSelectedClients() : setOpenModalCreate(!openModalCreate)} className="button-create" variant="outlined">
                {page === "/selected-clients" ? "Limpar clientes selecionados" : "Criar cliente"}
            </Button>
            {
                page === "/selected-clients" ?
                    null
                    :
                    <div className="pagination">
                        <Button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </Button>
                        {generatePageNumbers().map((pageNumber) => (
                            <Button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className={currentPage === pageNumber ? "active-page" : ""}
                            >
                                {pageNumber}
                            </Button>
                        ))}
                        <Button
                            onClick={handleNextPage}
                            disabled={clients?.count !== undefined && currentPage === Math.ceil(clients?.count / limit)}
                        >
                            &gt;
                        </Button>
                    </div>
            }
            <ModalCreateAndUpdate
                handleClose={() => setOpenModalCreate(!openModalCreate)}
                isOpen={openModalCreate}
                mode="create"
            />
        </ClientListContainer>
    );
};

export default ClientList;
