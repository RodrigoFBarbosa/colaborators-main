import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-proj-registration',
  templateUrl: './proj-registration.component.html',
  styleUrls: ['./proj-registration.component.scss'],
})
export class ProjRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  closeBtnName?: string;

  constructor(public BsModalRef: BsModalRef, private FormBuilder: FormBuilder) {}


  ngOnInit(): void {
      
  }
  
}
