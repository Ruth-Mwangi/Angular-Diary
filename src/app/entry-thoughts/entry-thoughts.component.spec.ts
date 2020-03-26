import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryThoughtsComponent } from './entry-thoughts.component';

describe('EntryThoughtsComponent', () => {
  let component: EntryThoughtsComponent;
  let fixture: ComponentFixture<EntryThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
