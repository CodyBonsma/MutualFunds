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

    title: string = "Add Fund"

  ngOnInit(): void {
  }

  // function to create a new fund and send it to local db
  createFund(){
    if (this.service.form.valid){
      const obj = this.service.form.value;
      this.service.addFund(obj).subscribe(() => {
        console.log("success in adding a new fund");
        this.dialog.closeAll();
        this.getNewData();
      })
    } else {
      alert("NOT VALID");
    }
  }

  // onclear button that clears data in dialog modal
  onClear(): void {
    this.service.form.reset();
  }

  // triggered once new data is submitted. new data pulled and page is refreshed
  getNewData(): void{
    this.service.getFunds();
    window.location.reload();
  }

close(): void {
  this.dialog.closeAll();
}

}
