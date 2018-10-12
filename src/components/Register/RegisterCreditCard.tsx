import * as React from 'react'
import { observer } from 'mobx-react'
import { Register } from '../../store'

@observer
export class ComponentRegisterCreditCardForm extends React.Component<{ register: Register }> {
  render() {
    return (
      <div className='c-register-credit-card-form'>
        <div className='field'>
          <label className='label'>Name on card</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='STEVE JOBS'
              value={this.props.register.nameOnCard}
              onChange={(e) => this.props.register.setNameOnCard(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Card Number</label>
          <div className='columns is-narrow'>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='1234'
                  value={this.props.register.cardNumber1}
                  onChange={(e) => this.props.register.setCardNumber1(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='5678'
                  value={this.props.register.cardNumber2}
                  onChange={(e) => this.props.register.setCardNumber2(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='9012'
                  value={this.props.register.cardNumber3}
                  onChange={(e) => this.props.register.setCardNumber3(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='3456'
                  value={this.props.register.cardNumber4}
                  onChange={(e) => this.props.register.setCardNumber4(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='columns is-narrow' style={{ marginBottom: '.75rem'}}>
          <div className='column'>
            <div className='field'>
              <label className='label'>Expiry Date</label>
              <div className='columns is-narrow'>
                <div className='column'>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='MM'
                      value={this.props.register.expiryDateMonth}
                      onChange={(e) => this.props.register.setExpiryDateMonth(e.target.value)}
                    />
                  </div>
                </div>
                <div className='column'>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='YYYY'
                      value={this.props.register.expiryDateYear}
                      onChange={(e) => this.props.register.setExpiryDateYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='field'>
              <label className='label'>Security Code</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='123'
                  value={this.props.register.securityCode}
                  onChange={(e) => this.props.register.setSecurityCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>ZIP / Postal Code</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='12345'
              value={this.props.register.zip}
              onChange={(e) => this.props.register.setZip(e.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}