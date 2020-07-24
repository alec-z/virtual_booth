import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  @Input() title: string;
  @Input() logo: string;
  @Input() simpleDetail: string;


  constructor() { }

  ngOnInit(): void {
  }

}
