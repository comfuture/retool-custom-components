import { type FC } from 'react'

import { useRetoolState, useRetoolEventCallback } from '@tryretool/custom-component-collections'
export { ListItem } from './components/list-item'

export const HelloWorld: FC = () => {
  const [name, setName] = useRetoolState('name', 'World')
  const onClick = useRetoolEventCallback('click')

  return (
    <div>
      <div onClick={onClick}>Hello {name}!</div>
    </div>
  )
}
