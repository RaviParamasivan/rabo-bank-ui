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
    let lines = [];
    let headersVal = [];
    //parseing the header for prime ng table
    for (let i = 0; i < headers.length; i++) {
      let tarr = {};
      tarr["field"] = headers[i];
      tarr["header"] = headers[i];
      headersVal.push(tarr);
    }
    //parseing line for prime ng
    for (let i = 1; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = {};
        for (let j = 0; j < headers.length; j++) {
          tarr[headers[j]] = data[j];
        }
        lines.push(tarr);
      }
    }
    this.rows = lines;
    this.hearders = headersVal;
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