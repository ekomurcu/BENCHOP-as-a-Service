import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  problems: string[] = ['1a', '1b', '2a', '2b', '3a', '3b'];
  hasPressed: boolean = false;
  results: boolean = false;
  problem: string;
  response: any;
  loading: boolean = false;
  paramOne: number;
  paramTwo: number;
  paramThree: number;
  aboutPage: boolean = false;

  private _jsonURL =
    'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=f1b45755-b659-48b9-b775-3e334772c2d4';

  private _baseUrl = 'http://127.0.0.1:5000/flaskFrontend?no=';

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {}

  redirect(path) {
    this.problem = path;
    this.hasPressed = !this.hasPressed;
  }

  about() {
    this.aboutPage = !this.aboutPage;
  }

  goBack() {
    this.hasPressed = !this.hasPressed;
  }

  getResults(problem) {
    const newUrl =
      this._baseUrl +
      problem +
      '&sigma=' +
      this.paramOne +
      '&alfa=' +
      this.paramTwo +
      '&beta=' +
      this.paramThree;
    console.log(newUrl);

    this.loading = true;
    this.getJSON().subscribe((response) => {
      this.response = response;
      this.loading = false;
    });
    this.results = true;
  }
}
