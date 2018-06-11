import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {FactoryComponent} from "./factory/factory.component";
import {HallComponent} from "./hall/hall.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FactoryComponent },
  { path: 'hall', component: HallComponent , children: [
    { path: ':id', component: HallComponent }
  ]},
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
