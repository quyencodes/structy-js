function uncompress(s:string): string {
  const nums: string = '0123456789';

  let i: number = 0
  let j: number = 0

  let res: Array<string> = []

  while (j < s.length) {
    while (j < s.length && nums.includes(s[j])) j += 1
    let n: number = Number(s.slice(i, j))

    for (let k: number = 0; k < n; k+=1) {
      res.push(s[j])
    }

    j += 1
    i = j
  }

  return res.join('')
}

export {
  uncompress
}