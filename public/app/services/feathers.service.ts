import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class FeathersService{

  constructor(private http: Http){
    console.log("Feathers Service has started and it's running wild")
  }

  getLogs(){
    return this.http.get('http://localhost:3030/logs')
      .map(result => result.json())
  }

  addLog(log){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3030/logs',JSON.stringify(log),{headers:headers})
      .map(res => res.json())
  }
  deleteLog(id){

    return this.http.delete('http://localhost:3030/logs/' + id)
      .map(res => res.json())

  }


}
