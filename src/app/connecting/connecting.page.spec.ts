import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectingPage } from './connecting.page';

describe('ConnectingPage', () => {
  let component: ConnectingPage;
  let fixture: ComponentFixture<ConnectingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
