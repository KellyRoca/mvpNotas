import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface StudentData {
  Codigo: string;
  Fisica: number;
  Historia: number;
  Matematicas: number;
  Apellido: string;
  Nombre: string;
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
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getStudent().subscribe((res: Response) => {
      this.student = res.student_data[0];
    },
      (error) => {
        this.student = {
          Apellido: "Lozano Chamorro",
          Codigo: "C01-1",
          Fisica: 14,
          Historia: 19,
          Matematicas: 15,
          Nombre: "Gabriella Milagros "
        }
      })
  }

}
