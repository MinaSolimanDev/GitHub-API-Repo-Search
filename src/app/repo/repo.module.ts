import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';

import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoComponent } from './repo.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';

import { RepoService } from './shared/repo.service';


const routes: Routes = [
  { path: 'repos',
    component: RepoComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':owner/:repo', component: RepoDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    RepoListComponent,
    RepoListItemComponent,
    RepoComponent,
    RepoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [
    RepoService
  ]
})
export class RepoModule {}
