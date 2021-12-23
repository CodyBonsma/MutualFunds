import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { EditfundComponent } from './editfund/editfund.component';
import { AddFundComponent } from './addfund/add-fund.component';

const routes: Routes = [
  {path: 'funds', component: FundsComponent},
  {path: "funds/add", component: AddFundComponent},
  {path: 'funds/:id', component: FundComponent},
  {path: "funds/:id/edit", component: EditfundComponent},
  {path: '', redirectTo: 'funds', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
