import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  @Input() repositories: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.repositories);
  }

}
