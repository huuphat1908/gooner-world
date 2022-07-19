import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('react-native-gesture-handler', () => {})

describe('app', () => {
  it('render app', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
