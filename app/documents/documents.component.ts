import { Component } from '@angular/core';
import { Document } from './document';


@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: "assdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '05/06/17',
      image_url: 'https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg',
    },
    {
      title: "My Second Doc",
      description: "assdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '05/06/17',
      image_url: 'https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg',
    },
    {
      title: "My Last Doc",
      description: "assdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '05/06/17',
      image_url: 'https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg',
    }
  ]
}