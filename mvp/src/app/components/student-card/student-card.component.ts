import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface StudentData {
  Codigo: string;
  Fisica: number;
  Historia: number;
  Matematicas: number;
  "Nombre y Apellido": string;
}

interface Response {
  student_data: StudentData[];
}

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  student!: StudentData;
  constructor(
    // private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    // this.apiService.getStudent().subscribe((res: Response) => {
    //   this.student = res.student_data[0];
    //   console.log(this.student)
    // })

    this.student = {
      Codigo: 'CP-01',
      Fisica: 12,
      Historia: 14,
      Matematicas: 16,
      "Nombre y Apellido": "Susana Ramirez Torres"
    }
  }

}
