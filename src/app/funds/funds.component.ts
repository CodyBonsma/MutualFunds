import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  constructor(
    private fundService: FundService, 
    private http: HttpClient,
    public dialog: MatDialog) { }

  funds: Fund[] = [];

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload => {
      console.log("THis is the payload:", payload)
      this.funds = payload;
    })
  }

  openDialog(){
    // this.dialog.open()
  }

  // createFund(): void{
  //   this.fundService.addFund(data)
  // }

}
