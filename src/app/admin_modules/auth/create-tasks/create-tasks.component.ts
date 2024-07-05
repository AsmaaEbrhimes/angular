import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CreateServicesService } from './create-services.service';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTasksComponent {

  constructor(private fb: FormBuilder, private services: CreateServicesService, private toaster: ToastrService, private spinner: NgxSpinnerService) { }
  file_img: string = ""
  newTask!: FormGroup
  img_file = ''
  ngOnInit(): void {
    this.createFormTask()
  }

  users: any = [
    { name: "Moahmed", id: "6675f6aca8aceb7d1d1cdcc3" },
    { name: "Ali", id: "6675f774a8aceb7d1d1cdcc6" },
    { name: "Ahamed", id: "6675f793a8aceb7d1d1cdcc9" },
    { name: "Zain", id: "6675f7b8a8aceb7d1d1cdccc" },
  ]


  createFormTask() {
    this.newTask = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(5)]],
      userId: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      image: ['', Validators.required],
    })
  }


  createTask() {
    this.spinner.show()
    let model = this.prependFormData()
    this.services.create(model).subscribe(res => {
      this.spinner.hide()
      this.toaster.success("Success", "Create Success")
    }, err => {
      this.spinner.hide()
      this.toaster.error(err.message)
    }
    )
  }

  SelectImg(e: any) {
    this.file_img = e.target.value
    this.newTask.get('image')?.setValue(e.target.files[0])
  }

  prependFormData() {
    let newDate = moment(this.newTask.value['deadline'], 'YYYY-MM-DD').format('DD-MM-YYYY');
    let formData = new FormData()
    Object.entries(this.newTask.value).forEach(([key, value]: any) => {
      if (key === 'deadline') {
        formData.append(key, newDate)
      } else {
        formData.append(key, value)
      }
    });
    return formData
  }
}
