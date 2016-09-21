import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'orderRoot',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
