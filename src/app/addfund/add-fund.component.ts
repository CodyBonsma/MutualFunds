import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss']
})
export class AddFundComponent implements OnInit {

  constructor(public service: FundService) { }

  ngOnInit(): void {
  }


  onClear(): void {
    this.service.form.reset();
  }
}
