import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

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

  constructor(private route: ActivatedRoute, private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    const projectName = this.route.snapshot.params['project-name'];
    this.http.get('/assets/json/' + projectName + '.json').subscribe((data) => {
      this.data = data;
      window.scrollTo(0, 0);
    });
    const phone = this.cookieService.get('phone');
    if (phone !== undefined && phone != null && phone !== '') {
      this.http.get('/api/visits?project=' + projectName + '&phone=' + phone).subscribe();
    }

  }




}
