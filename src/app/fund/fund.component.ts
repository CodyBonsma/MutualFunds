import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { EditfundComponent } from '../editfund/editfund.component';
import { Fund } from './fund.model'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  fund: any = [];

  constructor(
    private route: ActivatedRoute, 
    private fundService: FundService, 
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    // adding the + in front of the value transforms it into a number
    this.route.params.subscribe(params =>{
      const myId = +params['id'];

      console.log('My id is:', myId);

      this.fundService.getFund(myId).subscribe(payload => {
        console.log("this is the single fund payload", payload);
        this.fund = payload;
      });
    })
  }

  edit(): void {
    // console.log("data to edit:", data)
    // const obj = data;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(EditfundComponent, {autoFocus: true, width: "60%", data: this.fund});
  }

}
