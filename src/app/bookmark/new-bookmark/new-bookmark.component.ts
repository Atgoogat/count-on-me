import { Component, OnInit } from '@angular/core'
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { NewBookmark } from 'src/app/model/bookmark'
import { AddNewBookmark } from 'src/app/state/bookmark.actions'
import { convertNullValuesToUndefined } from 'src/app/util/null-to-undef.util'

@Component({
  selector: 'app-new-bookmark',
  templateUrl: './new-bookmark.component.html',
  styleUrls: ['./new-bookmark.component.sass'],
})
export class NewBookmarkComponent implements OnInit {
  formGroup = this.formBuilder.group({
    bookTitle: ['', Validators.required],
    page: [0, [Validators.required, Validators.min(0)]],
    totalPages: [undefined, Validators.min(1)],
  })

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    const newBookmark: NewBookmark = convertNullValuesToUndefined(
      this.formGroup.getRawValue()
    )

    this.store.dispatch(new AddNewBookmark(newBookmark)).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
