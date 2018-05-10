import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Process} from "../../../models/models";

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './approval.component.html',
  styleUrls:['./approval.component.scss']
})
export class ApprovalComponent {

  @Input() process:Process;

  iFrameSource: string = "http://localhost:4000/#/";
  reviews:string[] = ["Awesome process model", "This could use some serious improvement", "Subject X is missing"];

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(){
    this.process = new Process();
    this.process.created_at = new Date();
    this.process.process_name = "Business-Trip-Application-Process";
    this.process.process_description = "This S-BPM process model describes how a employee applies for a business trip";
  }

  switchIFrameSource(){
    this.iFrameSource = "http://localhost:4200/#/home";
  }

  transformUrl(url:string):any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
