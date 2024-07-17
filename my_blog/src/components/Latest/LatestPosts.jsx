import React, { useState } from 'react';

const LatestPosts = ({ travel, health, creative }) => {

    return (
        <>
            <h2 class="center-text">Latest Posts</h2>
            <main id="index-main">
                <div id="content">

                    <section id="travel">
                        <h2>Travel and Adventures</h2>
                        <div id="travel-posts">
              {travel && travel.length > 0 ? (
                travel.map((post, index) => (
                    <div key={index} className="post">
                    <img src={post.image} alt={post.title} />
                    <span className='post-date'>{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    
                    <a href={post.url}>Read more</a>
                  </div>
                ))
              ) : (
                <p>No travel posts available</p>
              )}
            </div>
                    </section>

                    <section id="health">

                        <h2>Health and Fitness</h2>
                        <div id="health-posts">
                        {health && health.length > 0 ? (
                health.map((post, index) => (
                    <div key={index} className="post">
                    <img src={post.image} alt={post.title} />
                    <span className='post-date'>{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    
                    <a href={post.url}>Read more</a>
                  </div>
                ))
              ) : (
                <p>No travel posts available</p>
              )}
                        </div>
                    </section>


                    <section id="creative">
                        <h2>Creative Pursuits</h2>
                        <div id="creative-posts">
                        {creative && creative.length > 0 ? (
                creative.map((post, index) => (
                  <div key={index} className="post">
                    <img src={post.image} alt={post.title} />
                    <span className='post-date'>{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    
                    <a href={post.url}>Read more</a>
                  </div>
                ))
              ) : (
                <p>No travel posts available</p>
              )}
                        </div>
                    </section>


                </div>
            </main>

        </>
    )
}

export default LatestPosts