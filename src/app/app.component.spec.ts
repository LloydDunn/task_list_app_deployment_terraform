import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigatorService } from './services/navigator/navigator.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const mockNavigatorService = {
    navigate: jasmine.createSpy('navigate'),
  };

  const mockMatDialog = {
    open: jasmine.createSpy('open'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NavigatorService, useValue: mockNavigatorService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
      imports: [RouterTestingModule, MatToolbarModule, MatButtonModule, MatCardModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('#openCourseUpdateDialog should open dialog', () => {
    component.openTaskDialog();

    expect(mockMatDialog.open).toHaveBeenCalled();
  });
});
