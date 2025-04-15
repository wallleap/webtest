
class Storage {
  constructor() {
    this.storage = window.localStorage
  }
  set(key, value) {
    this.storage.setItem(key, value)
  }
  get(key) {
    return this.storage.getItem(key)
  }
  remove(key) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
  onStorageChange(key, callback) {
    window.addEventListener('storage', (event) => {
      if (event.key === key) {
        callback(event.newValue)
      }
    })
  }
}