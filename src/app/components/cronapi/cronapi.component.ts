import { Component, OnInit } from '@angular/core';
import { CronService } from '../../service/cron.service';
import { CronRequest } from '../../models/cron.request';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-cronapi',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './cronapi.component.html',
  styleUrl: './cronapi.component.scss'
})
export class CronapiComponent implements OnInit {
  public cronform!: FormGroup;
  public message : string | undefined = '';
  constructor(private _cronService: CronService) {
    
    
  }
  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.cronform = new FormGroup({
      cronexpression: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      url: new FormControl('', [Validators.required, Validators.pattern(reg)]),

    })
  }
  public callCron(){
    if(this.cronform.valid===false){
      this.message = 'Please verify the Cron Expression or URL'
      return;
    }
    this.message = undefined;
    const req: CronRequest = {
      cronExpression:this.cronform.controls['cronexpression'].value,
      url:this.cronform.controls['url'].value
    };
    this._cronService.createCron(req)
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.message = 'CRON task scheduled'
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
}
