import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  data: any ={
    header: {
    },
    mainInfo: {
    },
    courseShowBlock: {
      items: []
    },
    videoShowBlock: {
      items: []
    },
    advertiseShowBlock: {
      items: []
    },
    calendars: []

  };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const projectName = this.route.snapshot.params['project-name'];
    this.http.get('/assets/json/' + projectName + '.json').subscribe((data) => {
      this.data = data;
      window.scrollTo(0, 0);
    });
  }




}
