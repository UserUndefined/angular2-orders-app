import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { NavbarComponent } from './navbar.component';

describe('Navbar', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      NavbarComponent
    ]
  }));

  it('should log ngOnInit', inject([NavbarComponent], (navbar: NavbarComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    navbar.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

  it('menu items count', inject([NavbarComponent], (navbar: NavbarComponent) => {
    navbar.ngOnInit();
    expect(navbar.menuItems.length).toEqual(2);
    expect(navbar.brandMenu.length).toEqual(1);
  }));

});
