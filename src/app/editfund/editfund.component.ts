import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private router: Router, 
    public service: FundService, 
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

  edit(): void{
    // this.fundService.updateFund(this.fund).subscribe(data => {
    //   console.log('updated data:', data);
    // })
  }

    // onclear button that clears data in dialog modal
    onClear(): void {
      this.service.form.reset();
    }
}
