export default function getFileExtension(filename) {
  if (!filename) return ''
  const ext = (/[^./\\]*$/.exec(filename) || [''])[0]
  return '.' + ext.toLowerCase()
}
