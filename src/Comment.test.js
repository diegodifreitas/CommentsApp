import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
    it('renders without crashing', () => {
        const comment = { comment: 'teste' }
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.text()).toBe(comment.comment)
        expect(wrapper.is('.well')).toBe(true)
    })
})