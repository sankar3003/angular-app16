import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateComponentComponent } from './post-create-component.component';

describe('PostCreateComponentComponent', () => {
  let component: PostCreateComponentComponent;
  let fixture: ComponentFixture<PostCreateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCreateComponentComponent]
    });
    fixture = TestBed.createComponent(PostCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
