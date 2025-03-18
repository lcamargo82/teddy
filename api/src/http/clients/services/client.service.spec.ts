import { Test, TestingModule } from "@nestjs/testing";
import { ClientService } from "./client.service";
import { ClientModule } from "../client.module";

describe('ClientService', () => {
    let clientService: ClientService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [{
                provide: ClientService,
                useValue: {
                    findAll: jest.fn(),
                    findOne: jest.fn(),
                    create: jest.fn(),
                    update: jest.fn(),
                    delete: jest.fn(),
                }
            }],
        }).compile()

        clientService = module.get<ClientService>(ClientService)
    })

    it('Should be defined', () => {
        expect(clientService).toBeDefined()
    })
})