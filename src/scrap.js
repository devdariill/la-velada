$$('img').forEach(img=>{
  const src = img.src
  const [filename] = src.split('/').reverse()
  // console.log(filename)
  const [name] = filename.split('.')

  const a = document.createElement('a')
  a.setAttribute('href', src)
  a.setAttribute('download', name)
  a.click()
})