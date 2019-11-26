import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingComponent } from './king.component';

const routes: Routes = [
    { path: '', component: KingComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class KingRoutingModule { }
