import { WebStorageNames } from './Constants'

export const WebStorage = {
  getLocalStore(keyName) {
    const keyValue = localStorage.getItem(keyName)
    return this.processGetData(keyValue)
  },
  setLocalStore(keyName, keyValue) {
    localStorage.setItem(keyName, this.processSetData(keyValue))
  },
  removeLocalStore(keyName) {
    localStorage.removeItem(keyName)
  },
  getSessionStore(keyName) {
    const keyValue = sessionStorage.getItem(keyName)
    return this.processGetData(keyValue)
  },
  setSessionStore(keyName, keyValue) {
    sessionStorage.setItem(keyName, this.processSetData(keyValue))
  },
  processGetData(str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return str
    }
  },
  processSetData(value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    return value.toString()
  },
  getLocalUserInfo() {
    return this.getLocalStore(WebStorageNames.UserInfo)
  },
  getLocalAuthInfo() {
    return this.getLocalStore(WebStorageNames.AuthInfo)
  },
  clearUserInfo() {
    this.setLocalStore(WebStorageNames.UserInfo, null)
    this.setLocalStore(WebStorageNames.AuthInfo, null)
  }
}
