import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  heroes: any[];

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.loadHereos().subscribe(r => this.heroes = r);
  }

  private loadHereos(): Observable<any[]> {
    return this.http.get('/api/v1/heroes').map(r => r.json());
  }
}
