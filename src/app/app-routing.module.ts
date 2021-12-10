import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHomeComponent } from "./git-home/git-home.component";


const routes: Routes = [
  {path: '', component: GitHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
