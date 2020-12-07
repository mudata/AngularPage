import { TestBed } from '@angular/core/testing';
import { ItemService } from './item.service';
describe('ItemService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ItemService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=item.service.spec.js.map