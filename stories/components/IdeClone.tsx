import React, { useState } from 'react'
import './IdeClone.css'
import SampleDragBar from './SampleDragBar'
import { useResizable } from '../../src'

const IdeClone = (): JSX.Element => {
  const [draggingTarget, setDraggingTarget] = useState<
    'terminal' | 'file' | 'plugin' | null
  >(null)

  const { position: terminalH, dragBarProps: terminalDragBarProps } =
    useResizable({
      axis: 'y',
      initial: 150,
      min: 50,
      reverse: true,
      onResizeStart: () => setDraggingTarget('terminal'),
      onResizeEnd: () => setDraggingTarget(null),
    })
  const { position: fileW, dragBarProps: fileDragBarProps } = useResizable({
    axis: 'x',
    initial: 250,
    min: 50,
    onResizeStart: () => setDraggingTarget('file'),
    onResizeEnd: () => setDraggingTarget(null),
  })
  const { position: pluginW, dragBarProps: pluginDragBarProps } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
    reverse: true,
    onResizeStart: () => setDraggingTarget('plugin'),
    onResizeEnd: () => setDraggingTarget(null),
  })

  const cn = (...args: any[]) => args.filter(Boolean).join(' ')

  return (
    <div className={'flex flex-column h-screen bg-dark font-mono color-white'}>
      <div className={'flex grow'}>
        <div
          className={cn(
            'shrink-0 contents',
            draggingTarget === 'file' && 'dragging'
          )}
          style={{ width: fileW }}
        >
          File Tree
        </div>
        <SampleDragBar {...fileDragBarProps} />
        <div className={'flex grow'}>
          <div className={'grow bg-darker contents'}>Editor</div>
          <SampleDragBar {...pluginDragBarProps} />
          <div
            className={cn(
              'shrink-0 contents',
              draggingTarget === 'plugin' && 'dragging'
            )}
            style={{ width: pluginW }}
          >
            Plugin
          </div>
        </div>
      </div>
      <SampleDragBar dir={'horizontal'} {...terminalDragBarProps} />
      <div
        className={cn(
          'shrink-0 bg-darker contents',
          draggingTarget === 'terminal' && 'dragging'
        )}
        style={{ height: terminalH }}
      >
        Terminal
      </div>
    </div>
  )
}

export default IdeClone
