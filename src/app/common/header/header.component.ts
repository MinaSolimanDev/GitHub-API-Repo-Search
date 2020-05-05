import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { SET_REPOS } from 'src/app/location-reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  repo: string;

  constructor(private store: Store<any>, private router: Router) {}

  search(searchForm: NgForm) {
    if (searchForm.invalid ) {
      return;
    }
    this.router.navigate(['/']);
    this.store.dispatch({ type: SET_REPOS, payload: this.repo});
  }
}
