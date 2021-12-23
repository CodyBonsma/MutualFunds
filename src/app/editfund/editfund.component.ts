import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router, 
    private fundService: FundService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // adding the + in front of the value transforms it into a number
    // this.route.params.subscribe(params =>{
    //   const myId = +params['id'];

    //   console.log('My id is:', myId);

    //   this.fundService.getFund(myId).subscribe(payload => {
    //     console.log("this is the single fund payload", payload);
    //     this.fund = payload;
    //   });
    // })
  }

  edit(): void{
    // this.fundService.updateFund(this.fund).subscribe(data => {
    //   console.log('updated data:', data);
    // })
  }
}
