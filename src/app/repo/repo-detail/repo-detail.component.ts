import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from '../shared/repo.service';
import { Repo } from '../shared/repo.model';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  repo: Repo;

  constructor(private route: ActivatedRoute,
              private repoService: RepoService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRepo(params.owner, params.repo);
      });
  }

  getRepo(owner: string , repos: string) {
    this.repoService.getRepoByFullName(owner, repos).subscribe(
      (repo: Repo) => {
        this.repo = repo;
      });
  }

}
