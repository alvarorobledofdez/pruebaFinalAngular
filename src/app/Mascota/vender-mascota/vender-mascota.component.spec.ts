import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderMascotaComponent } from './vender-mascota.component';

describe('VenderMascotaComponent', () => {
  let component: VenderMascotaComponent;
  let fixture: ComponentFixture<VenderMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
