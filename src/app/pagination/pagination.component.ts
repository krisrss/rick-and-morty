import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() paginationData = '';
  @Output() onPaginate = new EventEmitter<any>();
  paginationInfo: any = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.paginationInfo = this.paginationData;
  }

  disableButton(buttonStatus: string) {
    if (buttonStatus === null) {
      return "disabled"
    }
    else {
      return ""
    }
  }


  onPreviousPage() {
    if (this.paginationInfo.prev !== null) {
      window.scroll(0, 0);
      this.apiService.getNextPage(this.paginationInfo.prev).subscribe((data) => {
        this.onPaginate.emit(data);
      });
    }
  }

  onNextPage() {
    if (this.paginationInfo.next !== null) {
      window.scroll(0, 0);
      this.apiService.getNextPage(this.paginationInfo.next).subscribe((data) => {
        this.onPaginate.emit(data);
      });
    }
  }

  currentPageNumber() {
    if (this.paginationInfo.next !== null) {

      let urlText = this.paginationInfo.next;
      let isPresent = urlText.includes("&");

      if (isPresent === false) {
        var pageNr = urlText.match(/\d/g);
        pageNr = pageNr.join("");
        return pageNr - 1;
      }
      else {

        var start_pos = urlText.indexOf('?') + 1;
        var end_pos = urlText.indexOf('&', start_pos);
        var text_to_get = urlText.substring(start_pos, end_pos)

        var pageNr = text_to_get.match(/\d/g);
        pageNr = pageNr.join("");
        var finalResult = pageNr - 1
        return (finalResult);

      }
    }
    else {
      return this.paginationInfo.pages
    }
  }
}
