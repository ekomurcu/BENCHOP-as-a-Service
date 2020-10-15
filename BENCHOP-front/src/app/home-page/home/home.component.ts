import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ProblemsService } from 'src/app/services/problems.service';
// import { Problems } from 'src/app/models/problems.model';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  problems: string[] = ['1a', '1b', '2a', '2b', '3a', '3b'];
  hasPressed: boolean = false;
  results: boolean = false;
  problem: string;

  ngOnInit(): void {}

  redirect(path) {
    this.problem = path;
    this.hasPressed = !this.hasPressed;
  }

  goBack() {
    this.hasPressed = !this.hasPressed;
  }

  getResults() {
    this.results = !this.results;
  }
}
