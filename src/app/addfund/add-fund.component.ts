import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss']
})
export class AddFundComponent implements OnInit {

  constructor(
    public service: FundService, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createFund(){
    if (this.service.form.valid){
      const obj = this.service.form.value;
      console.log("WHAT WE GET BACK:", obj);
      this.service.addFund(obj).subscribe(() => {
        console.log("success in adding a new fund");
        this.dialog.closeAll();
        this.getNewData();
      })
    } else {
      alert("NOT VALID");
    }
  }

  onClear(): void {
    this.service.form.reset();
  }

  getNewData(): void{
    this.service.getFunds();
    window.location.reload();
  }
}
