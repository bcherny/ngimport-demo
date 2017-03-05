import { element as $, mock } from 'angular'
import 'angular-mocks'
import { $compile, $httpBackend, $log, $rootScope } from 'ngimport'
import { xhr } from './'

describe('ngimport', () => {
  beforeEach(() => {
    mock.module('ngimport-demo')
    mock.inject()
  })
  describe('foo', () => {
    it('should compile', () => {
      const { element } = compile()
      expect(element.html()).toBe('Hello world! 10')
      element.remove()
    })
    it('should log to the console on load', () => {
      spyOn($log, 'info')
      const { element } = compile()
      expect($log.info).toHaveBeenCalledWith('Controller loaded')
      element.remove()
    })
  })
  describe('xhr', () => {
    it('should make GET requests', () => {
      $httpBackend.expectGET(/foo\/bar/).respond({})
      xhr.get('foo/bar')
      $httpBackend.flush()
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })
  })
})

function compile() {
  const element = $('<foo foo="foo"></foo>')
  const scope = Object.assign($rootScope.$new(true), {
    foo: 10
  })
  $compile(element)(scope)
  scope.$apply()
  return { element, scope }
}
