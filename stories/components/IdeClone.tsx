import React from 'react';

import SampleSeparator from './SampleSeparator';
import { useResizable } from '../../src';
import { cn } from '../utils/cn';

const IdeClone = (): JSX.Element => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    separatorProps: terminalDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 150,
    min: 50,
    reverse: true,
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    separatorProps: fileDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 50,
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    separatorProps: pluginDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
    reverse: true,
  });

  return (
    <div className="flex flex-column h-screen bg-dark font-mono color-white overflow-hidden">
      <div className="flex grow">
        <div
          className={cn('shrink-0 contents', isFileDragging && 'dragging')}
          style={{ width: fileW }}
        >
          File Tree
        </div>
        <SampleSeparator isDragging={isFileDragging} {...fileDragBarProps} />
        <div className="flex grow">
          <div className="grow bg-darker contents">Editor</div>
          <SampleSeparator isDragging={isPluginDragging} {...pluginDragBarProps} />
          <div
            className={cn('shrink-0 contents', isPluginDragging && 'dragging')}
            style={{ width: pluginW }}
          >
            Plugin
          </div>
        </div>
      </div>
      <SampleSeparator dir="horizontal" isDragging={isTerminalDragging} {...terminalDragBarProps} />
      <div
        className={cn('shrink-0 bg-darker contents', isTerminalDragging && 'dragging')}
        style={{ height: terminalH }}
      >
        Terminal
      </div>
    </div>
  );
};

export default IdeClone;
