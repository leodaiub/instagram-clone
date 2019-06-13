import React, { Component }  from 'react';
import api from '../services/api';

import './Feed.css';

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";


class Feed extends Component {

    state = {
        feed: [],
    };

    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({feed: response.data});
    }

    render(){
        return(
            <section id="post-list">
              {this.state.feed.map(post => (
                  <article>
                  <header>
                      <div class="user-info">
                          <span>{post.author}</span>
                          <span class="place">{post.place}</span>
                      </div>
                      <img src={more} alt="Mais" />
                  </header>
                  <img src={`http://localhost:3030/files/${post.image}`} alt="" />

                  <footer>
                      <div className="actions">
                      <img src={like} alt="Like" />
                      <img src={comment} alt="Comment" />
                      <img src={send} alt="Send" />
                      </div>

                      <strong>{post.likes}Curtidas</strong>
                      <p>
                              {post.description}
                          <span>{post.hashtags}</span>
                      </p>
                  </footer>
              </article>
              )) }
            </section>
        );
    }
}

export default Feed;