import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model'

@Component({
  selector: 'app-editfund',
  templateUrl: './editfund.component.html',
  styleUrls: ['./editfund.component.scss']
})
export class EditfundComponent implements OnInit {

  // fund: Fund = {};

  title: string = "Edit Fund"
  editData: Fund = this.data;

  constructor(
    private router: Router, 
    public service: FundService, 
    public dialog: MatDialog,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    // adding the + in front of the value transforms it into a number
    // this.route.params.subscribe(params =>{
    //   console.log(params)

      // console.log('My id is:', myId);

      // this.fundService.getFund(myId).subscribe(payload => {
      //   console.log("this is the single fund payload", payload);
      //   this.fund = payload;
      // });
    // })
  }

  edit(newData: any){
    this.service.updateFund(newData).subscribe(data => {
      console.log('updated data:', data);
      this.dialog.closeAll();
    })

    console.log(newData)
  }

    // onclear button that clears data in dialog modal
    onClear(): void {
      this.service.form.reset();
    }

    close(): void {
      this.dialog.closeAll();
    }
}
