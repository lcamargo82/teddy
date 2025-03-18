import apiBase from "../api/api";
import { IClientEntity } from "../models/client.entity";

export interface IClientResponse {
    clients: IClientEntity[];
    count: number;
}

export class ClientService {
    async findAll(page: number, limit: number, filterByName?: string): Promise<IClientResponse> {
        try {
            const response = await apiBase.get<IClientResponse>(`/client?limit=${limit}&page=${page}&filterByName=${filterByName}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter clientes:", error);
            throw error;
        }
    }

    async deleteClient(id: string): Promise<IClientEntity> {
        try {
            const response = await apiBase.delete(`/client/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao deletar cliente:", error);
            throw error;
        }
    }

    async createClient(data: { name: string, wage: number, enterprise: number }): Promise<IClientEntity> {
        try {
            const response = await apiBase.post<IClientEntity>("/client", data);
            return response.data;
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error);
            throw error;
        }
    }

    async updateClient(id: string, data: { name: string, wage: number, enterprise: number }): Promise<IClientEntity> {
        try {
            const response = await apiBase.patch<IClientEntity>(`/client/${id}`, data);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            throw error;
        }
    }

    async findById(id: string): Promise<IClientEntity> {
        try {
            const response = await apiBase.get<IClientEntity>(`/client/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar cliente por ID:", error);
            throw error;
        }
    }
}
