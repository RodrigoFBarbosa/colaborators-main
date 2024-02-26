import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjRegistrationComponent } from './proj-registration/proj-registration.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Modal with component'
      },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(ProjRegistrationComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
