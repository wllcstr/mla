import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import movies from './../files/FILMES.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.nome.toLowerCase().includes(filter) || data.diretor.toLowerCase().includes(filter) || data.genero.toLowerCase().includes(filter);
    };
  }

  public movieList: { nome:string, ano:number, diretor:string, genero:string, desc:string, poster:string }[] = movies;


  displayedColumns: string[] = ['nome', 'ano', 'diretor', 'genero'];
  dataSource = new MatTableDataSource(this.movieList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
