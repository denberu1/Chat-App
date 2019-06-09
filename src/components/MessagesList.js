import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessagesList = props => {
  console.log(props, 'props');
  const { messages } = props;

  const getMessages = () => messages.map(message => <Message key={message.id} {...message} />);

  return (
    <section id='message-list'>
      <span className='sectionTitle chatTitle'>Chat Messages</span>
      <div className='messagesList'>{getMessages()}</div>
    </section>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;