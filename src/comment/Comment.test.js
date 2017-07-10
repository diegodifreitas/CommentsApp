import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
    it('renders without crashing', () => {
        const comment = {
            comment: 'teste',
            user: {
                uid: '12345',
                name: 'Diego Dulval',
                photo: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/19399412_449059848784374_1766956015543707244_n.jpg?oh=51f77d413dc27b32a7ddfee1273119fb&oe=59CEC97A'
            }
        }
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.find('.direct-chat-text').text()).toBe(comment.comment)
    })
})