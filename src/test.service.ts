import { Injectable } from '@nestjs/common';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
    private testRepo: TestRepository = new TestRepository();
    add(): number {
        return this.testRepo.getNumberInDb();
    }
}
