import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  faSearch = faSearch;

  @Output() onSearchStringComplete: EventEmitter<any> = new EventEmitter<any>();


  searchString = '';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  emitSearchString() {
    if (this.searchString && this.searchString !== '') {
      this.onSearchStringComplete.emit(this.searchString);
    } else {
      this.snackBar.open('Please provide a username to search', 'Error', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }

}
