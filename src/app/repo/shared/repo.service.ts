import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepoService {

  constructor(private http: HttpClient) {}

  public getRepoByFullName(owner: string, repository_name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${owner}/${repository_name}`);
  }

  public getRepos(search_string: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q={${search_string}}`);
  }

}
