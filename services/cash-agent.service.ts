import { Injectable } from '@angular/core';
import { AwsCoreService } from './awscore.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashAgentService extends AwsCoreService {

  constructor(private http: HttpClient) {
    super()
  }


  getInstitutionData(payload) {
    // let params = JSON.parse(payload)
    let url = 'https://s7vx84ypkc.execute-api.ap-southeast-1.amazonaws.com/dev/institute'

    return new Promise((resolve, reject) => {
      this.http.post(url, payload).subscribe((res) => {
        console.log(res);
        resolve(res)
      },(err) => {
        console.log(err)
        reject(err)
      }
      )
    })

  }

}
