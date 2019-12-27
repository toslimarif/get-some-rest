import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  httpMethods: string[];
  constructor(private service: HomeService,
              private formBuilder: FormBuilder) {
    this.httpMethods = service.getHttpMethods();
    this.requestForm = this.formBuilder.group({
      method: [null, Validators.required],
      url: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onResetUrl() {
    if (this.requestForm.value.url) {
      this.requestForm.patchValue({url: null});
    }
  }

  onSendRequest() {
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
    }
  }
}
