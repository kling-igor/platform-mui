import React, { PureComponent } from 'react'

export default {
  type: 'view',
  name: 'withViewHOC',
  create: () =>
    function withViews(Wrapped, views) {
      class ViewWrapper extends PureComponent {
        render() {
          const { forwardedRef, ...rest } = this.props
          return <Wrapped ref={forwardedRef} {...rest} {...views} />
        }
      }
      ViewWrapper.displayName = `withView(${Wrapped.displayName || Wrapped.name || 'Component'})`
      return React.forwardRef((props, innerRef) => <ViewWrapper forwardedRef={innerRef} {...props} />)
    }
}
