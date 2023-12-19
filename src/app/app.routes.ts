import { Routes } from '@angular/router';
import { CronapiComponent } from './components/cronapi/cronapi.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'callcron',
    },
    {
        path: 'callcron', component: CronapiComponent,
    }
];
