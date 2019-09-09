// fake
export default {
  type: 'service',
  name: 'templateManager',
  private: true,
  create: () => ({
    get: function(id) {
      console.log('USING FAKE TEMPLATE MANAGER...')
      return null
    }
  })
}
