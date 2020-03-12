import Link from 'next/link'
import { connect } from 'react-redux'

import Counter from './counter'

function Page({
  error,
  linkTo,
  NavigateTo,
  title,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default connect(state => state)(Page)