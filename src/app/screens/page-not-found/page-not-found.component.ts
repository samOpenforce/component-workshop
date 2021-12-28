import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRouting } from '../../app-routing';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  ROUTING_PATH = AppRouting.PATH;

  address = '';
  addressSub!: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.address = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.address = this.router.url;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.addressSub) {
      this.addressSub.unsubscribe();
    }
  }
}
