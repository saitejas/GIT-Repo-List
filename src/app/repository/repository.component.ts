import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: any;

  constructor() { }

  ngOnInit(): void {
  }

}
