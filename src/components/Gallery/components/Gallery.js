import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'
import Descriptions from './DayDescriptions'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const Gallery = ({ images = DEFAULT_IMAGES }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isDialogOpen, setShowDialog] = React.useState(false)
  const closeDialog = () => {
    setSelectedIndex(null)
    setShowDialog(false)
  }

  const openDialog = (selectedIndex) => {
    setSelectedIndex(selectedIndex)
    setShowDialog(true)
  }

  return (
    <Wrapper>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <GalleryItem
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                caption={obj.caption}
                description={obj.description}
                position={obj.position}
                position={i}
                toggleLightbox={openDialog}
              />
            )
          })}
        </div>
      )}
      <Dialog
        css={{ borderRadius: '4px' }}
        isOpen={isDialogOpen}
        onDismiss={closeDialog}
      >
        {Descriptions({ index: selectedIndex })}
        <ul className="actions">
          <li>
            <a onClick={closeDialog} className="button">
              Продолжить
            </a>
          </li>
        </ul>
      </Dialog>
    </Wrapper>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
