import { Injectable } from '@angular/core';


@Injectable()
export class ServerConfigProvider {

  private _host = 'http://localhost:10000/';
  private _checkIfMailTaken = `${this._host}user/register/checkIfMailTaken/`;
  private _getUser = `${this._host}/api/me/`;
  private _getStoreProcesses = `${this._host}api/store/processes`;
  private _getOrPostStoreProcessRatings = `${this._host}api/store/processRatings`;
  private _uploadOWL = `${this._host}api/store/process/`;
  private _createProcess = `${this._host}api/store/process/upload`;


  public get checkIfMailTaken(): string {return this._checkIfMailTaken};
  public get getUser(): string {return this._getUser};
  public get getStoreProcesses(): string {return this._getStoreProcesses};
  public get getStoreProcessRatings(): string {return this._getOrPostStoreProcessRatings};
  public get postStoreProcessRating(): string {return this._getOrPostStoreProcessRatings};
  public get uploadOWL(): string {return this._uploadOWL};
  public get createProcess(): string {return this._createProcess};

}
