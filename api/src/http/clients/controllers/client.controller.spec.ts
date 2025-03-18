import { Test, TestingModule } from "@nestjs/testing";
import { ClientService } from "../services/client.service";
import { ClientController } from "./client.controller";
import { ClientEntity } from "../../../core/models/entities/client.entity";
import { CreateClientDto } from "../../../core/models/dto/client.dto";

const clientEntityList: ClientEntity[] = [
    { id: '1', name: 'John', wage: 2000, enterprise: 123.456 },
    { id: '2', name: 'Jane', wage: 1500, enterprise: 123.456 },
    { id: '3', name: 'Mike', wage: 3000, enterprise: 123.456 },
]

// const createdClient = new ClientEntity({ enterprise: 3500, wage: 3000, name: 'teste', active: true, id: '1' }) 

describe('ClientService', () => {
    let clientService: ClientService
    let clientController: ClientController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClientController],
            providers: [{
                provide: ClientService,
                useValue: {
                    findAll: jest.fn().mockResolvedValue(clientEntityList),
                    findOne: jest.fn(),
                    create: jest.fn(),
                    update: jest.fn(),
                    delete: jest.fn(),
                }
            }],
        }).compile()

        clientService = module.get<ClientService>(ClientService)
        clientController = module.get<ClientController>(ClientController)
    })

    it('Should be defined', () => {
        expect(clientService).toBeDefined()
        expect(clientController).toBeDefined()
    })

    it('FindAll should be return all clients', async () => {
        const result = await clientController.findAll()

        expect(result).toEqual(clientEntityList)
    })

    // describe('create', () => {
    //     const body: CreateClientDto = {
    //         enterprise: 3500,
    //         name: 'Teste',
    //         wage: 3500,
    //     } 

    //     it('Should create a client', async () => {
    //         const result = await clientController.create(body)

    //         expect(result).toEqual(createdClient)
    //     })

    // })
})