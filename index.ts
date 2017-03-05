import { bootstrap, module } from 'angular'
import { $http, $log } from 'ngimport'

export const xhr = {
  get(url: string) {
    return $http.get(url)
  }
}

export const app = {
  template: `<foo foo="42"></foo>`
}

export const foo = {
  bindings: {
    foo: '<'
  },
  controller: class FooController {
    constructor() {
      $log.info('Controller loaded')
    }
  },
  template: 'Hello world! {{ $ctrl.foo }}'
}

module('ngimport-demo', ['bcherny/ngimport'])
  .component('app', app)
  .component('foo', foo)
  .factory('xhr', () => xhr)

bootstrap(document.querySelector('#App')!, ['ngimport-demo'])
