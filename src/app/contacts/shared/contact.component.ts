import { ContactModel } from './contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  @Input() contact: ContactModel;
  @Input() highlightText: string;

  constructor() { }

  ngOnInit() {
  }

}