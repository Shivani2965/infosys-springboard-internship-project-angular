import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Destinations } from './destinations';

describe('Destinations', () => {
  let component: Destinations;
  let fixture: ComponentFixture<Destinations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destinations],
    }).compileComponents();

    fixture = TestBed.createComponent(Destinations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
