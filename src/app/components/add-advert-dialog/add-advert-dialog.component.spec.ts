import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertDialogComponent } from './add-advert-dialog.component';

describe('AddAdvertDialogComponent', () => {
  let component: AddAdvertDialogComponent;
  let fixture: ComponentFixture<AddAdvertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
