import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  problems: string[] = ['1', '2', '3', '4', '5', '6'];
  hasPressed: boolean = false;
  results: boolean = false;
  problem: string;
  response: any;
  loading: boolean = false;
  K: number;
  T: number;
  r: number;
  sig: number;
  aboutPage: boolean = false;
  allProblemsPage: boolean = false;
  sub: any;
  invalid: boolean = false;
  errorMessage: string = '';
  startTimeStamp: Date;
  endTimeStamp: Date;
  timeTaken: number;
  error: boolean = false;

  private _baseUrl = 'http://130.238.29.12:5000/flaskFrontend?no=';

  public getJSON(url): Observable<any> {
    console.log(url);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(url, {
      headers,
      responseType: 'text',
    });
  }

  ngOnInit(): void {}

  redirect(path) {
    this.problem = path;
    this.hasPressed = !this.hasPressed;
  }

  about() {
    this.aboutPage = !this.aboutPage;
  }

  allProblems() {
    this.hasPressed = !this.hasPressed;
    this.allProblemsPage = !this.allProblemsPage;
  }

  goBack() {
    this.hasPressed = !this.hasPressed;
    this.allProblemsPage = false;
    this.K = null;
    this.T = null;
    this.r = null;
    this.sig = null;
    this.response = null;
    this.results = false;
  }

  getResults(problem) {
    if (!this.K || !this.T || !this.r || !this.sig) {
      this.errorMessage = 'You must set all the parameters, with numbers';
      this.invalid = true;
      return;
    } else {
      this.invalid = false;
      const newUrl =
        this._baseUrl +
        problem +
        '&K=' +
        this.K +
        '&T=' +
        this.T +
        '&r=' +
        this.r +
        '&sig=' +
        this.sig;
      this.loading = true;
      this.startTimeStamp = new Date();
      this.sub = this.getJSON(newUrl)
        .pipe(
          catchError(async (err) => {
            console.log(err), (this.error = true);
          })
        )
        .subscribe((response) => {
          console.log(response);
          this.response = response;
          this.loading = false;
          this.endTimeStamp = new Date();
          this.timeTaken =
            (this.endTimeStamp.getTime() - this.startTimeStamp.getTime()) /
            1000;
        });
      this.results = true;
    }
  }

  getAllResults() {
    const allResultsUrl =
      'http://130.238.29.12:5000/flaskFrontend?no=1,2,3,4,5';
    this.loading = true;
    this.sub = this.getJSON(allResultsUrl).subscribe((response) => {
      console.log(response);
      this.response = response;
      this.loading = false;
    });
    this.results = true;
  }
}
