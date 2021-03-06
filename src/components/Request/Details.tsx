import * as React from 'react'
import { ComponentTopRequest } from '../Top'
import { ComponentRequestProgress } from './Progress'
import { ComponentButtonIcon } from '../Button'
import { screen, RequestScreen, Request, request } from '../../store'
import { inject, observer } from 'mobx-react'

declare const window: any

@inject('request')
@observer
export class ComponentRequestDetailsForm extends React.Component<{ request?: Request }> {
  componentDidMount() {
    if (!this.props.request) { return }
    const self = this
    const inputs: any = document.getElementsByClassName('c-request-details-form__address-input')
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i]
      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        types: ['geocode'],
      })
      autocomplete.inputId = input.id
      autocomplete.addListener('place_changed', function onPlaceChanged(this: any) {
        if (!self.props.request) { return }
        const location = this.getPlace().geometry.location
        self.props.request.setDeliveredTo(input.value)
        self.props.request.deliveredToLat = location.lat()
        self.props.request.deliveredToLng = location.lng()
      })
    }
  }
  onDeliveredToChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const request = this.props.request as Request
    request.setDeliveredTo(e.target.value)
  }
  onContactNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const request = this.props.request as Request
    request.setContactNumber(e.target.value)
  }

  render() {
    if (!this.props.request) {
      throw new Error('request store is undefined')
    }
    return (
      <div className='c-request-details-form'>
        <div className='field'>
          <label className='label'>Delivered to</label>
          <div className='control'>
            <input
              id='c-request-details-form__address-input'
              className='input c-request-details-form__address-input'
              type='text'
              placeholder='Seoul, Korea'
              value={this.props.request.deliveredTo}
              onChange={this.onDeliveredToChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Contact number</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='+821012345678'
              value={this.props.request.contactNumber}
              onChange={this.onContactNumberChanged}
            />
          </div>
        </div>
      </div>
    )
  }
}

export class ComponentRequestDetails extends React.Component {
  render() {
    return (
      <div className='c-request-details'>
        <ComponentTopRequest
          label='Request Delivery'
        />
        <ComponentRequestProgress progressNum={2} />
        <ComponentRequestDetailsForm />
        <ComponentButtonIcon
          icon={['fal', 'arrow-right']}
          label='Next Step'
          isActivated={true}
          backgroundColor='#7200ff'
          isBottom={true}
          onClick={() => screen.setRequestScreen(RequestScreen.Payment)}
        />
      </div>
    )
  }
}
