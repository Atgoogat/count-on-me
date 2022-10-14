import { Inject, Injectable } from '@angular/core'
import { IdStorageProvider } from '../app.tokens'
import { Id } from '../model/type/id.type'

@Injectable({
  providedIn: 'root',
})
export class IdService {
  constructor(@Inject(IdStorageProvider) private readonly storage: Storage) {}

  getUniqueId(): Id {
    const strId = this.storage.getItem('id') ?? '1'
    const id = parseInt(strId)
    if (id === NaN) {
      throw new Error(`expected ${strId} to be an integer`)
    }
    this.storage.setItem('id', `${id + 1}`)
    return id
  }
}
