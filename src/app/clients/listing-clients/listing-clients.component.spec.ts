import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingClientsComponent } from './listing-clients.component';

describe('ListingClientsComponent', () => {
  let component: ListingClientsComponent;
  let fixture: ComponentFixture<ListingClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
