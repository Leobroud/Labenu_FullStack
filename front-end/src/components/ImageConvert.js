const convertFile = () => {

  const reader = new FileReader()

  reader.readAsDataURL(props)

  reader.onload = () => {
    setUrl(reader.result)
  }
}