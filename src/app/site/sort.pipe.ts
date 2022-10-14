import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform<T, K extends keyof T>(
    value: T[] | null | undefined,
    key: K,
    direction: 'asc' | 'desc' = 'desc'
  ): T[] | null | undefined {
    if (value === null || value == undefined) {
      return value
    }

    const sorted = [...value].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1
      } else if (a[key] > b[key]) {
        return 1
      }
      return 0
    })

    return direction === 'asc' ? sorted : sorted.reverse()
  }
}
