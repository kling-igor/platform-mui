import React, { memo } from 'react'

const Formula = memo(({ id, value, align, style, click }) => {
  const children = []

  /* eslint react/no-array-index-key: "off" */
  value.forEach((item, i) => {
    const { base, sub, sup } = item

    if (base) {
      children.push(<span key={i * 3}>{base}</span>)
    }
    if (sub) {
      children.push(<sub key={i * 3 + 1}>{sub}</sub>)
    }
    if (sup) {
      children.push(<sup key={i * 3 + 2}>{sup}</sup>)
    }
  })

  return (
    <span
      id={id}
      key={id}
      role="presentation"
      onClick={click}
      style={Object.assign({}, ...style.self, { display: 'inline-block', textAlign: align })}
    >
      {children}
    </span>
  )
})

export default Formula
