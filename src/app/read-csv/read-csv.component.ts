import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.css']
})
export class ReadCsvComponent implements OnInit {

  rows: any[];
  hearders: any[];


  ngOnInit() {
  }

  constructor() { }

  public parseCsv(csv) {
    let csvData = csv;
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lineItems = [];
    let headerItem = [];
    //parsing the csv header and transforming to primeng table header formate
    for (let i = 0; i < headers.length; i++) {
      let headerTemp = {};
      headerTemp["field"] = headers[i];
      headerTemp["header"] = headers[i];
      headerItem.push(headerTemp);
    }
    //parsing the csv line item and transforming to primeng table row formate
    for (let i = 1; i < allTextLines.length; i++) {
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let lineItemTemp = {};
        for (let j = 0; j < headers.length; j++) {
          lineItemTemp[headers[j]] = data[j];
        }
        lineItems.push(lineItemTemp);
      }
    }
    this.rows = lineItems;
    this.hearders = headerItem;
  }

  public fileChangeListener(files: FileList) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result;
        //console.log(csv);
        this.parseCsv(csv);

      }
    }
  }

}