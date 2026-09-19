import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationDetails } from './destination-details';

describe('DestinationDetails', () => {
  let component: DestinationDetails;
  let fixture: ComponentFixture<DestinationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
