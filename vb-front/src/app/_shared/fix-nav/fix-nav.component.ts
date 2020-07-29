import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fix-nav',
  templateUrl: './fix-nav.component.html',
  styleUrls: ['./fix-nav.component.scss']
})
export class FixNavComponent implements OnInit {
  @Input() navBack = false;

  constructor() { }

  ngOnInit(): void {
  }

}
