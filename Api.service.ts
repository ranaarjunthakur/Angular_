import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/@vex/services/app.config';

@Injectable({
  providedIn: 'root'
})
export class AllApisService {

  token: any = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

//TODO:4,24

  SendEmailData(payload: any): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }

    return new Promise((resolve, reject) => {
      this.http.post(AppConfig.apiEndpoint + 'send-email-admin', payload, httpOptions).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          reject('Something went wrong; please try again later.');
        }
      );
    });
  }

  //TODO:5


  RowUpdate(payload: any): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }

    return new Promise((resolve, reject) => {
      this.http.put(AppConfig.apiEndpoint + 'update-skills', payload, httpOptions).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          reject('Something went wrong; please try again later.');
        }
      );
    });
  }

  //TODO:6

  skillData(orgId: any): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }

    return new Promise((resolve, reject) => {
      this.http.get(AppConfig.apiEndpoint + `get-skills-orgId-projection?orgId=${orgId}&ProjectionExpression=skill_name,combination`, httpOptions).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          reject('Something went wrong; please try again later.');
        }
      );
    });
  }


}
