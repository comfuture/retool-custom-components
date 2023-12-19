import { type FC } from 'react'
import { useRetoolState, useRetoolEventCallback } from '@tryretool/custom-component-collections'
import tw from 'tailwind-styled-components'

const ItemContainer = tw.div`
  flex
  flex-row
  gap-2
  items-center
  p-4
  border-b
  border-gray-200
  hover:bg-gray-100
`

const ItemTitle = tw.h1`
  text-lg
  font-semibold
`

const ActionButton = tw.button`
  bg-blue-500
  hover:bg-blue-700
  text-sm
  text-white
  font-bold
  py-2
  px-4
  rounded
`

export const ListItem: FC = () => {
  const [title, setTitle] = useRetoolState('title', 'Title')
  const [description, setDescription] = useRetoolState('description', 'Description')
  const [image, setImage] = useRetoolState('image', 'https://via.placeholder.com/45')
  const [action, setAction] = useRetoolState('action', 'Action')
  const onClick = useRetoolEventCallback('click')
  const onClickAction = useRetoolEventCallback('clickAction')

  return (
    <ItemContainer className={'custom-item'}>
      {image && <img src={image} onClick={onClick}/>}
      <div onClick={onClick}>
        <ItemTitle>{title}</ItemTitle>
        <div>{description}</div>
      </div>
      {action && <ActionButton onClick={onClickAction}>{action}</ActionButton>}
    </ItemContainer>
  )
}
