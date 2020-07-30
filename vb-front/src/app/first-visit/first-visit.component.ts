import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-first-visit',
  templateUrl: './first-visit.component.html',
  styleUrls: ['./first-visit.component.scss']
})
export class FirstVisitComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router,
              private http: HttpClient
  ) { }

  ngOnInit(): void {
    const phone = this.route.snapshot.queryParams.phone;
    this.cookieService.set('phone', phone);
    this.router.navigate(['/']);


  }

}
