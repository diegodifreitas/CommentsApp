import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'

describe('<App />', () => {
  const base = {
    onAuthStateChanged: jest.fn(),
    syncState: jest.fn()
  }
  const auth = {
    signInWithPopup: jest.fn(),
    onAuthStateChanged: jest.fn()
  }
  const providers = {
    'facebook': jest.fn()
  }

  const comment = {
    comment: 'teste',
    user: {
      uid: '12345',
      name: 'Diego Dulval',
      photo: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/19399412_449059848784374_1766956015543707244_n.jpg?oh=51f77d413dc27b32a7ddfee1273119fb&oe=59CEC97A'
    }
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} auth={auth} providers={providers} />)
    expect(wrapper.length).toBe(1)
  })
  it('should have .wrapper class', () => {
    const wrapper = shallow(<App base={base} auth={auth} providers={providers} />)
    expect(wrapper.is('.wrapper')).toBe(true)
  })
  it('shows Comments', () => {
    const wrapper = shallow(<App base={base} auth={auth} providers={providers} />)
    wrapper.instance().postNewComment({ comment })
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('adds a new comment to state when postNewComment', () => {
    const wrapper = mount(<App base={base} auth={auth} providers={providers} />)
    wrapper.instance().postNewComment({ comment: 'test-1' })
    wrapper.instance().postNewComment({ comment: 'test-2' })
    wrapper.instance().postNewComment({ comment: 'test-3' })

    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })
  /*  it('outputs the <App/>', () => {
      const wrapperShallow = shallow(<App />)
      const wrapperMount = mount(<App />)
      const wrapperRender = render(<App />)
    
      console.log(wrapperShallow.debug())
      console.log(wrapperMount.debug())
      console.log(wrapperRender.html())
    })*/
})
