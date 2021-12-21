import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fundService: FundService) { }

  ngOnInit(): void {
    // adding the + in front of the value transforms it into a number
    this.route.params.subscribe(params =>{
      const myId = +params['id'];

      console.log('My id is:', myId);

      this.fundService.getFund(myId).subscribe(payload => {
        console.log("this is the single fund payload", payload)
      });
    })
  }

}
