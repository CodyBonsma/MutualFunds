import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { AddFundComponent } from '../addfund/add-fund.component';
import { EditfundComponent } from '../editfund/editfund.component';
import { Fund } from '../fund/fund.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

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

  tableConfig: string[] = ["name", "ticker", "assetClass", "expenseRatio", "price", "YTD", "actions"];

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload => {
      console.log("THis is the payload:", payload)
      this.funds = payload;
      // window.location.reload();
      // console.log("THIS IS IN FUND:", this.funds)
    })
  }

  openDialog(): void{
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddFundComponent, {autoFocus: true, width: "60%", data: null});
  }

  deleteFund(data: number){
    console.log("ID FROM THE DELETE BUTTON", data);
    this.fundService.deleteFund(data).subscribe(() => {
      console.log("success in deleting fund");
      this.ngOnInit();
    })
  }

  editFund(data: Observable<any>){
    console.log("data to edit:", data)
    const obj = data;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(EditfundComponent, {autoFocus: true, width: "60%", data: obj});
  }

}
