import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfigProvider} from './serverconfig';
import {User, StoreProcess, StoreProcessRating} from '../../../../models/models';


@Injectable()
export class GatewayProvider {

  constructor(public http: HttpClient, public serverConfig: ServerConfigProvider) {
  }

  /**
   * EXAMPLE: Here we can define all methods which are connecting the frontend to the backend
   * i.e. => getAllProcesses or saveNewProcess or searchForProcess etc...
   */
  /*getAllProcesses = (): Promise<Array<any>> =>
    this.http.get<Array<any>>(null, {})
      .toPromise()
      .then(processes => processes);
  */

  // gets the current user
  getUser (): Promise<User> {
    return this.http.get<User>(this.serverConfig.getUser)
      .toPromise()
  }

  getStoreProcesses(): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getStoreProcesses)
      .toPromise()
  }

  getStoreProcessRatings(processId: number): Promise<StoreProcessRating[]> {
    return this.http.get<StoreProcessRating[]>(this.serverConfig.getStoreProcessRatings + '/' + processId)
      .toPromise()
  }

  getAllStoreProcessRatings(): Promise<StoreProcessRating[]> {
    return this.http.get<StoreProcessRating[]>(this.serverConfig.getStoreProcessRatings)
      .toPromise()
  }

  postStoreProcessRating(processId: number, rating: StoreProcessRating): void {
    const url = this.serverConfig.postStoreProcessRating + '/' + processId + '/add'
    this.http.post<StoreProcessRating>(url, rating).toPromise()
  }
}
