import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elegirnos } from './elegirnos';

describe('Elegirnos', () => {
  let component: Elegirnos;
  let fixture: ComponentFixture<Elegirnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elegirnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elegirnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
