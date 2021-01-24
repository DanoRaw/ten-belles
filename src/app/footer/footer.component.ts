import { Component, OnInit } from '@angular/core';
import { NgbdPopoverTriggers } from './popover';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
popover: NgbdPopoverTriggers;
  constructor() { }

  ngOnInit() {
  }

  

}
