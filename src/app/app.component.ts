import {Component, OnInit} from '@angular/core';
import {filter, interval, map, scan, take} from "rxjs";
import { ProductService } from '../data/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';
  people: any = {};
  show = false

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.leer().then(res => {
      this.people = res
      console.log(this.people)
    })
  }

  rxjsBtn() {
    let display = document.getElementById(
      "display"
    ) as HTMLTextAreaElement;

    interval(1000)
      .pipe(
        take(this.people.length),
        filter(v => this.people[v].age >= 20),
        map(v => this.people[v].name),
        scan((acc, v) => acc.concat(v), [])
      )
      .subscribe(res => {
        display.textContent = res.join(' ')
      })
  }

  rxBtn() {
    interval(1000)
      .pipe(
        take(this.people.length),
        filter(v => this.people[v].age >= 10),
        map(v => this.people[v].name),
        scan((acc, v) => acc.concat(v), [])
      )
      .subscribe(res => {
        this.show = true
      })
  }

}
