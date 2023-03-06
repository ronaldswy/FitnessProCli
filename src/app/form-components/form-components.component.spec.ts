 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentsComponent } from './form-components.component';

describe('FormComponentsComponent', () => {
  let component: FormComponentsComponent;
  let fixture: ComponentFixture<FormComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'GuamanPruebaU3'`, () => {
    const fixture = TestBed.createComponent(FormComponentsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GuamanPruebaU3');
  });

  fit('Probar toEqual', () =>{
    const fixture = TestBed.createComponent(FormComponentsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.formstyle span')?.textContent).toEqual('Nombres y Apellidos');
  });

  fit('Probar toBeLessThan', () => {
    const fixture = TestBed.createComponent(FormComponentsComponent);
    fixture.detectChanges();
    const cedulaCtrl = document.getElementById("cedulaCtrl") as HTMLInputElement;
    expect(cedulaCtrl.value).toBeLessThan(2350574238);
  })

  fit('Probar toContain', () =>{
    const fixture = TestBed.createComponent(FormComponentsComponent);
    fixture.detectChanges();
    const titulo = fixture.nativeElement as HTMLElement;
    expect(titulo.textContent).toContain('datos');
  });

  fit('Probar tomatch', () =>{
    const fixture = TestBed.createComponent(FormComponentsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.formstyle span')?.textContent).toMatch("res");
  });

  fit('Probar toBeNull', () =>{
    const fixture = TestBed.createComponent(FormComponentsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as  HTMLElement;
    expect(compiled.querySelector('.formstyle span')?.contains).toBeNull;
  });

});
