import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Output() search = new EventEmitter();
  category: string[] = [
    'All',
    'Songs',
    'Movies',
    'Technical',
    'Cryptocurrency',
  ];

  searchText = new FormControl('');

  selectedCategory: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.data.subscribe((category: any) => {
      this.selectedCategory = category;
    });
  }

  selectCategory(item: any) {
    console.log(item)
    this.categoryService.data.next(item);
  }
  onSearch() {
    this.selectCategory('All');
    console.log(this.searchText.value);
    this.categoryService.searchTerm.next(this.searchText.value);
  }
}
