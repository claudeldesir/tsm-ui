export default function () {
  Event.prototype.propagationPath = function propagationPath() {
    const polyfill = () => {
      let element = this.target || null
      const pathArr = [element]

      if (!element || !element.parentElement) {
        return []
      }
      while (element.parentElement) {
        element = element.parentElement
        pathArr.unshift(element)
      }
      return pathArr
    }

    return this.path || (this.composedPath && this.composedPath()) || polyfill()
  }
}