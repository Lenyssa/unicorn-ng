import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornsListPageComponent} from './pages/unicorns-list/unicorns-list.page';
import {AdminComponent} from './pages/admin/admin.component';


const routes: Routes = [
    {path: 'unicorns', component: UnicornsListPageComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
