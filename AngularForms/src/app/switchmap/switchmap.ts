import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-switchmap',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './switchmap.html',
  styleUrl: './switchmap.css',
})
export class Switchmap {
  private http = inject(HttpClient)
  searchControl = new FormControl('',{nonNullable:true});
  users$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(q => this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError(() => of<User[]>([]))
    ))
  )
}
