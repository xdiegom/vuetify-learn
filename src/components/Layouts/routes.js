import Layout from './Index'
import Grid from './Grid'
import Offset from './Offset'
import RowColumnBased from './RowColumnBased'
import Order from './Order'
import DirectionAlign from './DirectionAlign'
import NestedGrid from './NestedGrid'
import UniqueLayouts from './UniqueLayouts'

export default {
  path: '/layouts',
  name: 'layouts',
  component: Layout,
  children: [
    {
      path: 'grid',
      component: Grid,
      name: 'layouts.grid'
    },
    {
      path: 'offset',
      component: Offset,
      name: 'layouts.offset'
    },
    {
      path: 'order',
      component: Order,
      name: 'layouts.order'
    },
    {
      path: 'diralign',
      component: DirectionAlign,
      name: 'layouts.diralign'
    },
    {
      path: 'row-column-based',
      component: RowColumnBased,
      name: 'layouts.row-column-based'
    },
    {
      path: 'nested-grid',
      component: NestedGrid,
      name: 'layouts.nested-grid'
    },
    {
      path: 'unique-layouts',
      component: UniqueLayouts,
      name: 'layouts.unique-layouts'
    }
  ]
}
