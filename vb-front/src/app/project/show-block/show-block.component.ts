import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-block',
  templateUrl: './show-block.component.html',
  styleUrls: ['./show-block.component.scss']
})
export class ShowBlockComponent implements OnInit {
  @Input() title: string;
  @Input() detail: string;
  @Input() titleOuterLink: string;
  @Input() detailOuterLink: string;
  constructor() { }
  ngOnInit(): void {
  }

}
