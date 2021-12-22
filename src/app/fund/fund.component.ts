import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  fund: Fund = {};

  constructor(
    private route: ActivatedRoute, 
    private fundService: FundService, 
    private router: Router) { }

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
    this.router.navigateByUrl(`/funds/${this.fund.id}/edit`)
  }

}
