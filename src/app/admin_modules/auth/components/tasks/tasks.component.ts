import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy, inject, OnDestroy } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';


export interface DropdownOption {
  username: string;
  _id: number;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})


export class TasksComponent implements OnInit, OnDestroy {
  visible: boolean = false;
  constructor(
    public translate: TranslateService,
    private spinner: NgxSpinnerService) { }

  tasks: any = [];
  userId = ''
  description = ''
  _id = ''
  user: DropdownOption[] = []
  filteration: any = {}
  timeOut: any
  first: number = 0;
  rows: number = 10;
  totalItems=0

  public taskForm!: FormGroup;

  private _FormBuilder = inject(FormBuilder)
  private _Subscription = new Subscription()
  private _tasksServices = inject(AuthServicesService);
  private _ConfirmationService = inject(ConfirmationService)
  private _messageService = inject(MessageService)

  ngOnInit(): void {
    this.initTaskForm();
    this.getAllTasks();
    this.GetAllUsers()
  }

  complete = [
    { name: "Complete" },
    { name: "In-Progress" },
  ]


  initTaskForm() {
    this.taskForm = this._FormBuilder.group({
      title: ['', []],
      deadline: ['', []],
      desc: ['', []],
    })
  }

  Search(e: any) {
    this.filteration['keyword'] = e.target.value
    clearTimeout(this.timeOut)
    this.timeOut = setTimeout(() => {
      this.getAllTasks()
    }, 2000);
  }

  SekectUser(e: any) {
    this.filteration['userId'] = e.value._id
    this.getAllTasks()
  }


  SelectByStatus(e: any) {
    this.filteration['status'] = e.value.name
    this.getAllTasks()
  }

  handleDateChange(e: any, type: any) {
    this.filteration[type] = moment(e).format('DD-MM-YYYY');
    if (this.filteration['fromDate'] && this.filteration['toDate']) {
      this.getAllTasks();
    }
  }

  getAllTasks() {
    this._Subscription.add(
      this._tasksServices.getAllTasks(this.filteration).subscribe({
        next: (res) => {
          this.tasks = res.tasks
          this.totalItems = res.totalItems; 
          this.mapuserid()
        }
      })
    )
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getAllTasks();
    console.log(event)
  }


  GetAllUsers() {
    this._Subscription.add(
      this._tasksServices.getAllUser().subscribe({
        next: (res) => {
          this.user = res.users
        }, error: (err) => {
          console.log(err)
        }
      })
    )
  }

  submitUpdateModal() {
    // date as string format
    let formattedDate = moment(this.taskForm.get('deadline')?.value).format('DD-MM-YYYY');
    // data to send
    let FormData = {
      title: this.taskForm.get('title')?.value,
      deadline: formattedDate,
      desc: this.taskForm.get('desc')?.value,
    }
    this._Subscription.add(
      this._tasksServices.update(FormData, this._id).subscribe({
        next: (res) => {
          console.log(res)

        }, error: (err) => {
          console.log(err)
        }
      })
    )
  }

  mapuserid() {
    this.tasks.map((ele: any) => {
      this.userId = ele.userId.username
    })
  }

  updateModal(ele: any) {
    this._id = ele._id
    this.visible = true;
    // setting the values in the form
    this.taskForm.get('title')?.setValue(ele.title)
    this.taskForm.get('desc')?.setValue(ele.description)
    let deadline = moment(ele.deadline, 'DD-MM-YYYY').toDate(); // convert it into date object
    this.taskForm.get('deadline')?.setValue(deadline)
  }


  DeleteTask(event: Event, id: any) {
    this._ConfirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        this._messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        this._tasksServices.deleteTasks(id).subscribe({
          next: (res) => {
            console.log(res)
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      reject: () => {
        this._messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }




  ngOnDestroy(): void {
    this._Subscription.unsubscribe();
  }



}











