import { Routes } from '@angular/router';
import { District } from './pages/district/district';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';

export const routes: Routes = [

{
  path: '',
  component: Home
},
{
  path: 'district',
  component: District
},
{
  path: 'contact',
  component: Contact
}
];
