import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhoto } from '../interfaces/i-photo';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  like$ = new Subject<iPhoto>();

  getAllPhoto(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.apiUrl);
  }

  addLike(photo: iPhoto) {
    this.like$.next(photo);
  }
}
