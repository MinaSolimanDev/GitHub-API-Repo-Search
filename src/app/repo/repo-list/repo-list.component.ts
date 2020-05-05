import { Component} from '@angular/core';
import { RepoService } from '../shared/repo.service';
import { Repo } from '../shared/repo.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent{

  repo$: Observable<string>;
  repo: string;
  searchRepos: Repo[] = [];

  constructor(private repoService: RepoService, private store: Store<any>) {

    this.repo$ = store.pipe(select('repo'));
    this.repo$.subscribe(repo => {
      this.searchRepo(repo);
      this.repo = repo;
    });
  }

  searchRepo(repo: string) {
    this.searchRepos = [];
    this.repoService.getRepos(repo).subscribe(res => {
        this.searchRepos = res.items; },
        err => {});
  }

  resultFound() {
    return Object.keys(this.searchRepos).length > 0;
  }
}
