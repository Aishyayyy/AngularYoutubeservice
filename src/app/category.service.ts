import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  data = new BehaviorSubject('All');
  searchTerm = new BehaviorSubject('');
  constructor() {}
}
