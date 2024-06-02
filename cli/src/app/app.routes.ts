import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { LayoutClinetComponent } from './layout/layout-clinet/layout-clinet.component';
import { Tab1Component } from './pages/clent/products/tab1/tab1.component';
import { Tab2Component } from './pages/clent/products/tab2/tab2.component';
import { Tab3Component } from './pages/clent/products/tab3/tab3.component';
import { PhiendaugiaComponent } from './pages/phiendaugia/phiendaugia.component';
import { ListComponent } from './pages/admin/list/list.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ViewComponent } from './pages/clent/view/view.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { ProductsComponent } from './pages/clent/products/products.component';

export const routes: Routes = [
    // router ADMin
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'dashboard', component: DasboardComponent
            },
            {
                path: 'edit/:id', component: EditComponent
            },
            {
                path: 'list', component: ListComponent
            },
            {
                path: 'create', component: CreateComponent
            }
        ]
    },
    // Router Client
    {
        path: '', component: LayoutClinetComponent, children: [
            {
                path: '', redirectTo: '', pathMatch: 'full'
            },
            {
                path: '', component: ProductsComponent, children: [
                    {
                        path: '', component: Tab1Component
                    },
                    {
                        path: 'tab2', component: Tab2Component
                    },
                    {
                        path: 'tab3', component: Tab3Component
                    }
                ]
            },
            {
                path: 'view/:id', component: ViewComponent
            }
        ]
    },
    //dau gia
    {
        path: 'daugia', component: PhiendaugiaComponent
    },

];
