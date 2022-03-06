import React from 'react'
import './IdeClone.css'
import SampleDragBar from './SampleDragBar'
import { useResizable } from '../../src'

const IdeClone = (): JSX.Element => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    dragBarProps: terminalDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 150,
    min: 50,
    reverse: true,
  })
  const {
    isDragging: isFileDragging,
    position: fileW,
    dragBarProps: fileDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 50,
  })
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    dragBarProps: pluginDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
    reverse: true,
  })

  const cn = (...args: any[]) => args.filter(Boolean).join(' ')

  return (
    <div className={'flex flex-column h-screen bg-dark font-mono color-white'}>
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isFileDragging && 'dragging')}
          style={{ width: fileW }}
        >
          File Tree
        </div>
        <SampleDragBar isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={'flex grow'}>
          <div className={'grow bg-darker contents'}>Editor</div>
          <SampleDragBar
            isDragging={isPluginDragging}
            {...pluginDragBarProps}
          />
          <div
            className={cn('shrink-0 contents', isPluginDragging && 'dragging')}
            style={{ width: pluginW }}
          >
            Plugin
          </div>
        </div>
      </div>
      <SampleDragBar
        dir={'horizontal'}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={cn(
          'shrink-0 bg-darker contents',
          isTerminalDragging && 'dragging'
        )}
        style={{ height: terminalH }}
      >
        Terminal
      </div>
    </div>
  )
}

export default IdeClone
