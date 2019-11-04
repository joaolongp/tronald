import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemeComponent } from './meme/meme.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'meme', component: MemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
