import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aperiam rem, fuga aut eaque maxime iusto nam doloremque eos at! Error, alias. Atque reiciendis ipsa voluptate optio harum repellendus quaerat officiis laboriosam veniam numquam obcaecati magnam, suscipit aspernatur rerum possimus architecto. Dolorem iste, aliquid ipsum minus suscipit accusamus a est nulla quam placeat delectus voluptate aut cupiditate provident repellat reiciendis iure repudiandae commodi accusantium repellendus nam numquam, praesentium possimus at. Praesentium quam consectetur distinctio ipsum sed, nihil quod labore, id adipisci ullam impedit obcaecati ex consequuntur commodi aperiam facilis ducimus omnis eligendi. Accusamus esse nihil necessitatibus eveniet officiis quam reiciendis?";
  constructor() { }

  ngOnInit(): void {
  }

}
