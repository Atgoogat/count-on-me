export const convertNullValuesToUndefined = <T extends {}>(obj: T): T => {
  const copy: any = { ...obj }
  Object.keys(copy).forEach(key => {
    if (copy[key] === null) {
      copy[key] = undefined
    }
  })
  return copy
}
