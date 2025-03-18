import { create } from 'zustand';
import { IClientEntity } from '../../models/client.entity';

interface IClientStore {
    isAuthenticated: boolean;
    username: string;
    login: (name: string) => void;
    logout: () => void;
    authenticate: () => void;
    selectedClients: IClientEntity[];
    selectClient: (client: IClientEntity) => void;
    clearSelectedClients: () => void;
    removeClientById: (id: string) => void;
}

export const ClientStore = create<IClientStore>((set) => ({
    selectedClients: [],

    selectClient: (client: IClientEntity) => set((state) => ({
        selectedClients: [...state.selectedClients, client],
    })),

    clearSelectedClients: () => set({
        selectedClients: [],
    }),

    removeClientById: (id: string) => set((state) => ({
        selectedClients: state.selectedClients.filter(client => client.id !== id),
    })),

    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    username: localStorage.getItem('username') || '',
    login: (name: string) => set({ username: name }),
    logout: () => set({ username: '' }),
    authenticate: () => set({ isAuthenticated: true }),
}));
