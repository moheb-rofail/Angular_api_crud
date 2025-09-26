import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctCard } from './prodct-card';

describe('ProdctCard', () => {
  let component: ProdctCard;
  let fixture: ComponentFixture<ProdctCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdctCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
