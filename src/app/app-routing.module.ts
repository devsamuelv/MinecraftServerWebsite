import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { SettingsComponent } from './components/settings/settings.component';
import { IssueReportComponent } from './components/issue-report/issue-report.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path:"issues", component: IssueReportComponent},
  {path: "settings", component: SettingsComponent},
  {path: "**", component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
