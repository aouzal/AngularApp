import { NgModule } from "@angular/core";
import { FirstComponent } from './first.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { EmailService } from '../../app/email.service';

@NgModule({
    declarations: [
        FirstComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [FirstComponent],
    providers: [EmailService],
    bootstrap: []
})
export class FirstModule {

}