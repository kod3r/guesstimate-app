import React from 'react'
import StandardDropdownMenu from 'gComponents/utility/standard-dropdown-menu'
import CanvasViewForm from './canvasViewForm.js'
import Icon from 'react-fa'

import DropDown from 'gComponents/utility/drop-down/index.js'
import {DropDownListElement} from 'gComponents/utility/drop-down/index.js'
import {SpaceName} from './spaceName.js'
import './header.css'

const SaveMessage = ({saveState}) => (
  <div className='saveMessage'>
    {saveState == 'SAVING' && 'Saving...'}
    {saveState == 'ERROR' &&
      <div className='ui red horizontal label'>
        ERROR SAVING
      </div>
    }
    {saveState == 'SAVED' && 'All changes saved'}
  </div>
)

let SpaceHeader = ({space, onSave, onDestroy, onSaveName}) => (
  <div className='header'>

    <div className='header-name'>
      {space.name &&
        <SpaceName
            name={space.name}
            ownedByMe={space.ownedByMe}
            onSave={onSaveName}
        />
      }
    </div>

    <div className='header-actions'>
      <CanvasViewForm/>

      {space.ownedByMe &&
        <DropDown
            headerText={'Model Actions'}
            openLink={<a className='space-header-action'>Model Actions</a>}
            position='right'
        >
          <ul>
            <DropDownListElement icon={'warning'} text='Delete Model' onMouseDown={onDestroy}/>
          </ul>
        </DropDown>
      }

      <SaveMessage saveState={space.canvasState.saveState} ownedByMe={space.ownedByMe}/>
      </div>
  </div>
)
export default SpaceHeader
