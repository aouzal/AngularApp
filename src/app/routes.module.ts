import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'posts/:id',
        component: PostDetailsComponent
    },
    {
        path: 'register',
        component: ContactFormComponent
    },
    {
        path: 'login',
        component: SignUpFormComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule {

}