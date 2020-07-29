import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() detail: string;
  @Input() logo: string;
  @Input() banner = 'linear-gradient(148deg, #A509D8 0%, rgba(88,121,224,0.00) 100%);';
  @Input() project: string;
  @Input() showNav = false;
  constructor() { }

  ngOnInit(): void {
  }

}
