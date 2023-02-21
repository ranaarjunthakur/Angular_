import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

interface Kafein {
  name: string;
  address: string;
}
class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) {}
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  url = 'https://jsonplaceholder.typicode.com/albums';
  apiURL = 'https://jsonplaceholder.typicode.com/users';
  httpData: any[];
  todos: any = [];
  data = [];
  getDynamoDBClient: any;
  AppUsers: any;
  email = [];
  username = [];
  res: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.callApi();
    this.callApiByPromise();
    this.getTodos();
    this.promise();
    this.getPosts();
    this.getdata();
  }

  //  fetch data by http,subscribe()

  callApi() {
    this.http.get<Kafein[]>(this.url).subscribe((res) => {
      this.httpData = res;
      console.log('data1', this.httpData);
    });
  }

  // fetch data by promise

  callApiByPromise() {
    const _self = this;
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe(
        (res) => {
          console.log('data2', res);
          resolve(res);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    });
    return promise;
  }

  // fetch data by promise

  promise() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe((res) => {
        setTimeout(() => {
          if (res) {
            resolve(res);
            console.log('data3', res);
          } else {
            reject();
            console.log('error');
          }
        }, 2000);
      });
    });
    return promise;
  }

  // fetch data by async and await

  async getTodos() {
    try {
      this.todos = await (await fetch(this.apiURL)).json();
      console.log('data4', this.todos);
    } catch (err) {
      console.log(err);
    }
  }

  // fetch data by promise

  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.url;
      this.http.get<Post[]>(apiURL).subscribe({
        next: (res: any) => {
          this.data = res.map((res: any) => {
            return new Post(res.userId, res.id, res.title, res.body);
          });
          resolve();
          console.log('data5', this.data)
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  getdata() {
    const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((people) => {
        const names = people.map((person) => person.name).join('\n');
        console.log('data6', names);
      });
  }

  // fetch data  by dynamodb table

  fetchTabledata() {
    var params = {
      TableName: 'Comesa_Insurance_Company',
    };
    const _self = this;
    this.getDynamoDBClient().scan(params, onScan);
    function onScan(err, data) {
      if (err) {
        console.error(
          'Unable to scan the table. Error JSON:',
          JSON.stringify(err, null, 2)
        );
      } else {
        var x = data.Items;
        console.log(x);
      }
    }
  }

  // fetch data  by dynamodb table

  fetchData() {
    var params = {
      TableName: 'Users',
      IndexName: 'user_mode_index-index',
      KeyConditionExpression: '#user_mode_index =:user_mode_index',
      ExpressionAttributeValues: {
        ':user_mode_index': 'A',
      },
      ExpressionAttributeNames: {
        '#user_mode_index': 'user_mode_index',
      },
    };

    const _self = this;

    this.getDynamoDBClient().query(params, onQuery);

    function onQuery(err, data) {
      if (err) {
        console.error(
          'Unable to query the table. Error JSON:',
          JSON.stringify(err, null, 2)
        );
      } else {
        _self.AppUsers = data.Items;
        console.log(_self.AppUsers);
        // console.log(_self.AppUsers.length);
      }
    }
  }
}
